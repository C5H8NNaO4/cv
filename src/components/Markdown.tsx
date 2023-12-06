import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';

export const Markdown = (props: {
  children: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div style={props.style}>
      <ReactMarkdown {...props} rehypePlugins={[rehypeRaw]} />
    </div>
  );
};

export default Markdown;
