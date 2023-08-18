import { ICurrency } from '../../@types/converter';
import './Amount.scss';

interface IAmountProps {
  result: number;
  currentCurrency: ICurrency;
}
function Amount({ result, currentCurrency }: IAmountProps) {
  return (
    <section className="amount">
      <p className="amount-value">{result}</p>
      <p className="amount-currency">{currentCurrency.description}</p>
    </section>
  );
}
export default Amount;
