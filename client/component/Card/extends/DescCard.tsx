import BasicCard from '../BasicCard';

function HintCard({ desc }: { desc: string }) {
  return (
    <BasicCard id={ 'desc' } half>
      <pre>{ desc }</pre>
    </BasicCard>
  );
}

export default HintCard;