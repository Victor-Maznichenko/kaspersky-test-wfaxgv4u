import { exampleNewsItem } from './lib';
import { NewsCard } from '../news-card';

export const App = () => (
  <main>
    <NewsCard {...exampleNewsItem} />
  </main>
);
