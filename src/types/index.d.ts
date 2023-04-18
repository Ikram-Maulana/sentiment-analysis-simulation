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

export interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export interface HeaderProps {
  title: string;
  spotlight?: string;
  description: string;
}
