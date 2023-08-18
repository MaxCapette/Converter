import { ICurrency } from '../../@types/converter';
import './Currencies.scss';

interface LiCurrency {
  currencies: ICurrency[];
}
function Currencies({ currencies }: LiCurrency) {
  return (
    <div className="scrollLi">
      <h2>Currencies</h2>
      <ul>
        {currencies.map((currency) => {
          return <li key={currency.code}>{currency.description}</li>;
        })}
      </ul>
    </div>
  );
}

export default Currencies;
