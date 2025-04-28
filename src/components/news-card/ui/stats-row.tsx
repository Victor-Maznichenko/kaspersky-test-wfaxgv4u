import clsx from 'clsx';
import { Space, Typography } from 'antd';
import { formatDate } from '@/lib';
const { Text } = Typography;

interface StatsRowProps extends Pick<NewsItem, 'publishedAt' | 'reach' | 'traffic'> {
  className?: string;
}

export const StatsRow = ({ className, publishedAt, reach, traffic }: StatsRowProps) => {
  const publishedAtObj = formatDate(publishedAt);

  return (
    <Space className={clsx('text-xs', className)} size={[24, 5]} wrap>
      <div>
        <Text>{publishedAtObj.day}</Text>
        <Text type="secondary">{publishedAtObj.other}</Text>
      </div>
      <div>
        <Text>{Math.round(reach / 1000)}</Text>
        <Text type="secondary">K Reach</Text>
      </div>
      <div>
        <Text type="secondary">Top Traffic: </Text>
        {traffic.slice(0, 3).map(({ value, count }) => (
          <>
            <Text type="secondary">{value} </Text>
            <Text>{count}% </Text>
          </>
        ))}
      </div>
    </Space>
  );
};
