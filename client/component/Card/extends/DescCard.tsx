import BasicCard from '../BasicCard';

function DescCard({ desc }: { desc: string }) {
  return (
    <BasicCard id={ 'desc' } half>
      <pre>{ desc }</pre>
    </BasicCard>
  );
}

export default DescCard;