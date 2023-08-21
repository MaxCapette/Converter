import { ICurrency } from '../../@types/converter';
import './Amount.scss';

interface IAmountProps {
  result: number;
  currency: ICurrency;
}
function Amount({ result, currency }: IAmountProps) {
  return (
    <section className="amount">
      <p className="amount-value">{result.toFixed(2)}</p>
      <p className="amount-currency">{currency.description}</p>
    </section>
  );
}
export default Amount;
