export type NavItem = {
  title: string;
  href: string;
};

export type MainNavItem = NavItem;

export interface MetricsCardProps {
  title: string;
  value: number | string;
}

export interface GenerateDatasetProps {
  label: string;
  data: any;
  parsing?: null | { yAxisKey: string };
  backgroundColors?: string | string[];
  indexAxis?: string;
}

export interface ResultTextProps {
  prediction: {
    aspek: string;
    preprocessed: string;
    sentimen: string;
  };
}

export interface ResultFileProps {
  data: {
    Ulasan: string;
    cleaned_comment: string;
    sentimen: string;
    aspek: string;
  };
}

export type PredictResult = {
  Ulasan: string;
  cleaned_comment: string;
  sentimen: string;
  aspek: string;
};
