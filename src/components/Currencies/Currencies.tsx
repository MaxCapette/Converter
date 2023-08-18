import { useState } from 'react';
import { ICurrency } from '../../@types/converter';
import './Currencies.scss';

interface ICurrenciesProps {
  currencies: ICurrency[];
  setCurrentCurrency: React.Dispatch<React.SetStateAction<ICurrency>>;
}
function Currencies({ currencies, setCurrentCurrency }: ICurrenciesProps) {
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());
  };

  const getFilteredList = () =>
    currencies.filter((currency) =>
      currency.description.toLowerCase().includes(search)
    );
  const handleClick = (currencyClicked: ICurrency) => {
    setCurrentCurrency(currencyClicked);
  };
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
        {getFilteredList().map((currency) => {
          return (
            <div
              className="currencies-item"
              key={currency.code}
              onClick={() => {
                handleClick(currency);
              }}
              onKeyDown={() => {
                handleClick(currency);
              }} // Err 1
              role="button" // Err 2
              tabIndex={0} // Err 4
            >
              {currency.description}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Currencies;
