import './Currencies.scss';

interface ICurrency {
  description: string;
  code: string;
  rate: number;
}
interface ListProps {
  currencies: string[];
}

function Currencies({ currencies }: ICurrency) {
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
