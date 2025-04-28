import { Button, Tag, Typography } from 'antd';

interface HightlightsProps extends Pick<NewsItem, 'highlights'> {
  className?: string;
}

export const Hightlights = ({ className, highlights }: HightlightsProps) => {
  const highlightFragments = highlights.join('; ').split(/(<kw>.*?<\/kw>)/g);

  return (
    <div className={className}>
      <Typography.Text className="block mb-1">
        {highlightFragments.map((part, index) => {
          if (part.startsWith('<kw>') && part.endsWith('</kw>')) {
            return (
              <Tag className="me-0" color="#0772CB" key={index}>
                {part.slice(4, -5)}
              </Tag>
            );
          }
          return part;
        })}
      </Typography.Text>
      <Button className="p-0 h-auto text-[17px] hover:bg-transparent" color="primary" variant="text">
        Show more ▾
      </Button>
    </div>
  );
};
