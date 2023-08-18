import { useState } from 'react';
import { ICurrency } from '../../@types/converter';
import './Currencies.scss';

interface LiCurrency {
  currencies: ICurrency[];
}
function Currencies({ currencies }: LiCurrency) {
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const filteredCurrencies = currencies.filter((currency) =>
    currency.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="scrollLi">
      <input
        type="text"
        className="currencies-input"
        placeholder="search currencies..."
        onChange={handleChange}
        value={search}
      />
      <ul>
        {filteredCurrencies.map((currency) => {
          return <li key={currency.code}>{currency.description}</li>;
        })}
      </ul>
    </div>
  );
}

export default Currencies;
