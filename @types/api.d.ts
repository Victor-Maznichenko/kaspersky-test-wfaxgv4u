interface MetricEntryNews {
  value: string;
  count: number;
}

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  url: string;
  domain: string;
  publishedAt: Date;
  language: string;
  reach: number;
  keywords: MetricEntryNews[];
  authors: string[];
  country: string;
  countryCode: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  traffic: MetricEntryNews[];
  faviconUrl: string;
  highlights: string[];
}
