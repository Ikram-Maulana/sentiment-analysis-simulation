# Importing the libraries
import pandas as pd
import re
import joblib
import nltk
from nltk.corpus import stopwords
from flask import Flask, request, jsonify

# Create a Flask app
app = Flask(__name__)

# Load the model
def load_model(model_path):
    model = joblib.load(model_path)
    return model

tfidf = load_model('model/tfidf_model.pickle')
sentimen = load_model('model/svm_model.pickle')
aspek = load_model('model/svm_model_aspek.pickle')

# Function for Preprocessing
nltk.download('stopwords')
stop_words = stopwords.words('indonesian')
txt_stopwords = pd.read_csv('lib/stopwords.txt', header=None)
stop_words.extend(txt_stopwords[0].tolist())
stemmer = nltk.stem.PorterStemmer()

stop_words.remove('tidak')
stop_words.remove('tidakkah')
stop_words.remove('tidaklah')

normalization_word = pd.read_parquet('lib/normalization.parquet')
normalization_word_dict = {}

for index, row in normalization_word.iterrows():
  if row[0] not in normalization_word_dict:
    normalization_word_dict[row[0]] = row[1]

def normalize_text(text):
  return [normalization_word_dict[word] if word in normalization_word_dict else word for word in text.split()]

def remove_stopwords(text):
  return [word for word in text if word not in stop_words]

def stemmer_text(text):
  return [stemmer.stem(word) for word in text.split()]

def preprocessing(text):
    text = text.lower() # lowercase
    text = text.replace('_', ' ') # menghapus underscore
    text = re.sub(r'[^\w\s]', '', text) # menghapus punctuation atau tanda baca
    text = re.sub(r'\d+', '', text) # menghapus angka
    text = re.sub(r'[^\x00-\x7F]+', '', text) # menghapus emoji
    text = re.sub(r'http\S+', '', text) # menghapus link
    text = text.strip() # menghapus whitespace di awal dan akhir
    text = ' '.join(normalize_text(text)) # normalization
    text = ' '.join(remove_stopwords(text.split())) # remove stopwords
    text = ' '.join(stemmer_text(text)) # stemming
    return text

# Function for Prediction
def predict_sentiment_aspek(text):
    text = preprocessing(text)
    text_tfidf = tfidf.transform([text]).toarray()
    sentimen_pred = sentimen.predict(text_tfidf)[0]
    aspek_pred = aspek.predict(text_tfidf)[0]
    return {'sentimen': sentimen_pred, 'aspek': aspek_pred, 'preprocessed': text}

# Routes
@app.route('/')
def index():
    return jsonify({
        'description': 'Welcome to Sentiment Analysis Simulation API',
        'message': 'Sentiment Analysis API is running',
        'author': 'Ikram Maulana'
    })

@app.route('/api/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        if request.is_json:
          text = request.json.get('text')
          if text is not None:
            result = predict_sentiment_aspek(text)
            return jsonify({
                'message': 'success',
                'data': result
            })
          else:
            return jsonify({
                'message': 'error',
                'error_description': 'Text is required'
            }), 400
        else:
            return jsonify({
                'message': 'error',
                'error_description': 'Request is not in JSON format'
            }), 400
