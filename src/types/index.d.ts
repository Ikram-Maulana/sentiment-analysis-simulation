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
