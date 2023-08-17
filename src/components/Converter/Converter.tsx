import './Converter.scss';

import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import currencies from '../../data/currencies';

function Converter() {
  const amount = 1;
  const currencyName = 'United States Dollars';
  const amountDollard = 1.00009;
  return (
    <div className="Converter">
      <Header amount={amount} />
      <Currencies currencies={currencies} />
      <Amount currencyName={currencyName} amountDollard={amountDollard} />
    </div>
  );
}

export default Converter;
