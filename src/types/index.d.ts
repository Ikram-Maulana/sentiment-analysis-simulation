export interface ButtonsProps {
  loading: boolean;
}

export interface PredictionProps {
  prediction: {
    aspek: string;
    preprocessed: string;
    sentimen: string;
  };
}

export interface PredictFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  text: string;
  setText: (text: string) => void;
  loading: boolean;
}
