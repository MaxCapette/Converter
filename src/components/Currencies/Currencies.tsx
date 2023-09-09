import { useState } from 'react';
import { ICurrency } from '../../@types/converter';
import './Currencies.scss';

interface ICurrenciesProps {
  list: ICurrency[];
  setCurrency: React.Dispatch<React.SetStateAction<null | ICurrency>>;
}
function Currencies({ list, setCurrency }: ICurrenciesProps) {
  const [search, setSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());
  };

  const getFilteredList = () =>
    list.filter((currency) =>
      currency.description.toLowerCase().includes(search)
    );
  const handleLiClick = (currencyClicked: ICurrency) => {
    setCurrency(currencyClicked);
  };

  // useEffect(
  //   //callback exécutée apres chaques rendus
  //   () => {}
  // );
  // useEffect(
  //   //callback exécutée apres le 1er rendu
  //   () => {},
  //   //tableau de dépendance
  //   []
  // );

  return (
    <div className="currencies">
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
            <li key={currency.code} className="currencies-item">
              <div
                onClick={() => {
                  handleLiClick(currency);
                }}
                onKeyDown={() => {
                  handleLiClick(currency);
                }} // Err 1
                role="button" // Err 2
                tabIndex={0} // Err 4
              >
                {currency.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Currencies;
