import { exampleNewsItem } from './lib';
import { NewsCard } from '../news-card/ui';

export const App = () => (
  <main>
    <NewsCard {...exampleNewsItem} />
  </main>
);
