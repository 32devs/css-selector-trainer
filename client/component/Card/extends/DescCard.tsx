import ReactMarkDown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import BasicCard from '../BasicCard';

function DescCard({ desc }: { desc: string }) {
  return (
    <BasicCard id={ 'desc' } half>
      <ReactMarkDown rehypePlugins={[ rehypeRaw ]} children={ desc } />
    </BasicCard>
  );
}

export default DescCard;