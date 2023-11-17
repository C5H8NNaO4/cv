import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';

export const Markdown = (props: { children: string }) => {
  return <ReactMarkdown {...props} rehypePlugins={[rehypeRaw]} />;
};

export default Markdown;
