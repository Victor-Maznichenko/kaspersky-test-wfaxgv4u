import { Avatar, Space, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;

interface SourceInfoProps extends Pick<NewsItem, 'authors' | 'country' | 'domain' | 'faviconUrl' | 'language'> {
  className?: string;
}

export const SourceInfo = ({ className, domain, faviconUrl, country, language, authors }: SourceInfoProps) => (
  <Space className={className} size={[24, 10]} wrap>
    <Space size={4}>
      <Avatar src={faviconUrl} size="small" />
      <Link className="pb-[1px] border-b" href={`https://${domain}`}>
        {domain}
      </Link>
    </Space>
    <Text>{country}</Text>
    <Text className="capitalize">{language}</Text>
    <Space size={4}>
      <UserOutlined />
      <Text>{authors.join(', ')}</Text>
    </Space>
  </Space>
);
