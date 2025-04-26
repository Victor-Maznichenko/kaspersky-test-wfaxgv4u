import { Avatar, Card, Divider, Space, Tag, Typography } from 'antd';
import { LinkOutlined, UserOutlined } from '@ant-design/icons';
import { formatDate } from '../../lib';

interface NewsCardProps extends NewsItem {
  className?: string;
  tagsAmount?: number;
}

const { Text, Link, Title } = Typography;

export const NewsCard = ({
  title,
  domain,
  publishedAt,
  reach,
  country,
  language,
  authors,
  sentiment,
  traffic,
  keywords,
  url,
  highlights,
  faviconUrl,
  tagsAmount = 5,
}: NewsCardProps) => {
  const sentimentColor = {
    positive: 'green',
    neutral: 'blue',
    negative: 'red',
  }[sentiment];

  const publishedAtObj = formatDate(publishedAt)

  const topTraffic = traffic
    .slice(0, 3)
    .map((t) => `${t.value} ${t.count}%`)
    .join(' ');

  return (
    <Card
      style={{ marginBottom: 16 }}
      actions={[
        <Space key="original">
          <LinkOutlined />
          <Text>Original Source</Text>
        </Space>,
        <Space key="duplicates">
          <Text>Duplicates: 192</Text>
        </Space>,
        <Space key="relevance">
          <Text>By Relevance</Text>
        </Space>,
      ]}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-x-4 mb-3">
          <Text className="text-xs">
            <span></span>
            <span></span>
          </Text>
          <Text className="text-xs">{Math.round(reach / 1000)}K Reach</Text>
          <Text className="text-xs">Top Traffic: {topTraffic}</Text>
        </div>

        <Tag color={sentimentColor} style={{ marginBottom: 12 }}>
          {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
        </Tag>
      </div>

      <Title level={4} style={{ marginBottom: 12 }}>
        <Link href={url}>{title}</Link>
      </Title>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
        <Avatar
          src={
            faviconUrl || `https://www.google.com/s2/favIcon?domain=${domain}`
          }
          size="small"
        />
        <Text strong style={{ marginLeft: 8 }}>
          {domain}
        </Text>
        <Divider type="vertical" />
        <Text>{country}</Text>
        <Divider type="vertical" />
        <Text className="capitalize">{language}</Text>
      </div>

      <div style={{ marginBottom: 12 }}>
        <Space>
          <UserOutlined />
          <Text>{authors.join(', ')}</Text>
        </Space>
      </div>

      <div style={{ marginBottom: 12 }}>
        {highlights.map((highlight, i) => (
          <Text key={i} style={{ display: 'block', marginBottom: 4 }}>
            {highlight}
          </Text>
        ))}
        <Text type="secondary" style={{ cursor: 'pointer' }}>
          Show more
        </Text>
      </div>

      <div style={{ marginBottom: 12 }}>
        {keywords.slice(0, tagsAmount).map(({ value, count }, i) => (
          <Tag key={i} style={{ marginBottom: 4 }}>
            {value} {count}
          </Tag>
        ))}
        {keywords.length > tagsAmount && (
          <Tag className="cursor-pointer">
            Show All +{keywords.length - tagsAmount}
          </Tag>
        )}
      </div>

      <Divider />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text>
          {publishedAt.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </Text>
        <Text strong>{Math.round(reach / 1000)}K Top Reach</Text>
      </div>
    </Card>
  );
};
