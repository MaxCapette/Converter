import './Amount.scss';

interface AmountProps {
  currencyName: string;
  amountDollard: number;
}
function Amount({ currencyName, amountDollard }: AmountProps) {
  return (
    <div className="result">
      <p>{amountDollard}</p>
      <p>{currencyName}</p>
    </div>
  );
}
export default Amount;
