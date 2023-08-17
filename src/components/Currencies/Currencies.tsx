import './Currencies.scss';

interface ICurrency {
  description: string;
  code: string;
  rate: number;
}
interface LiCurrency {
  currencies: ICurrency[];
}
function Currencies({ currencies }: LiCurrency) {
  const currencyList = currencies.map((currency) => {
    return <li key={currency.description}>{currency.description}</li>;
  });
  return (
    <div className="scrollLi">
      <h2>Currencies</h2>
      <ul>{currencyList}</ul>
    </div>
  );
}

export default Currencies;
