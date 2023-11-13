import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
export const Markdown = (props) => {
  return (
    <ReactMarkdown components={{}} {...props} rehypePlugins={[rehypeRaw]} />
  );
};

export default Markdown;
