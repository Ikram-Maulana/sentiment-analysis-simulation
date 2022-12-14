import pickle
import streamlit as st

path = "./app/model/"

# TF-IDF
tf = pickle.load(open(path + "sentiment_analysis_tfidf.sav", "rb"))

# Import model
model = pickle.load(open(path + "sentiment_analysis_model.sav", "rb"))

# Judul Website
st.write(
    """
# Data Mining Sentiment Analysis
Website ini merupakan sebuah aplikasi untuk melakukan simulasi data mining sentiment analysis menggunakan algoritma Support Vector Machine (SVM) terhadap komentar pengguna aplikasi MyPertamina.
"""
)

comment = st.text_area("Masukkan komentar")

# Prediksi
comment_sentiment = ""


def classify(comment):
    pred = model.predict(tf.transform([comment]))
    if pred[0] == "positif":
        st.success("Termasuk dalam Kategori Komentar Positif")
    elif pred[0] == "netral":
        st.warning("Termasuk dalam Kategori Komentar Netral")
    else:
        st.error("Termasuk dalam Kategori Komentar Negatif")


if st.button("Klasifikasi"):
    comment_sentiment = classify(comment)
