import clsx from 'clsx';
import { Button, Card, Tag, Typography } from 'antd';
import { Keywords } from './keywords';
import { Hightlights } from './highlights';
import { SourceInfo } from './source-info';
import { StatsRow } from './stats-row';

const { Link, Title } = Typography;

interface NewsCardProps extends NewsItem {
  className?: string;
  tagsAmount?: number;
}

const SENTIMENT_COLOR = {
  positive: '#23ffb0',
  neutral: 'yellow',
  negative: 'red',
};

export const NewsCard = ({
  className,
  url,
  title,
  reach,
  domain,
  country,
  authors,
  traffic,
  language,
  keywords,
  sentiment,
  highlights,
  faviconUrl,
  publishedAt,
  tagsAmount = 5,
}: NewsCardProps) => {
  const sentimentColor = SENTIMENT_COLOR[sentiment] || SENTIMENT_COLOR.neutral;

  return (
    <Card className={clsx('mb-4 max-w-[966px] relative', className)}>
      <StatsRow className="mb-1 w-full pr-16" publishedAt={publishedAt} traffic={traffic} reach={reach} />

      <Tag className="absolute top-3.5 right-2" color={sentimentColor}>
        {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
      </Tag>

      <Link className="inline-block mb-1" href={url}>
        <Title className="font-normal text-inherit" level={4}>
          {title}
        </Title>
      </Link>

      <SourceInfo
        className="mb-4"
        domain={domain}
        country={country}
        authors={authors}
        language={language}
        faviconUrl={faviconUrl}
      />
      <Hightlights className="mb-4" highlights={highlights} />
      <Keywords className="mb-4 w-full" keywords={keywords} tagsAmount={tagsAmount} />

      <Button
        className="text-[#0484f1]"
        href={url}
        size="large"
        color="default"
        variant="filled"
        target="_blank"
        referrerPolicy="no-referrer"
      >
        Original Source
      </Button>
    </Card>
  );
};
