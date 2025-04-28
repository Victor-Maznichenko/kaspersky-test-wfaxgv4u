import { Space, Tag, Typography } from 'antd';

interface KeywordsProps extends Pick<NewsItem, 'keywords'> {
  className?: string;
  tagsAmount: number;
}

export const Keywords = ({ className, keywords, tagsAmount }: KeywordsProps) => (
  <Space className={className} size={4} wrap>
    {keywords.slice(0, tagsAmount).map(({ value, count }, i) => (
      <Tag
        className="rounded-full py-1 px-3 text-xs inline-flex gap-x-2 text-[#9bacba] border border-[#322e40]"
        color="transparent"
        key={i}
      >
        <Typography.Text>{value} </Typography.Text>
        <Typography.Text>{count}</Typography.Text>
      </Tag>
    ))}

    {keywords.length > tagsAmount && <Tag className="cursor-pointer">Show All +{keywords.length - tagsAmount}</Tag>}
  </Space>
);
