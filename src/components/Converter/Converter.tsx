import './Converter.scss';

import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import currencies from '../../data/currencies';

function Converter() {
  const amount = 1;

  return (
    <div className="Converter">
      <Header amount={amount} />
      <Currencies currencies={currencies} />
      <Amount result={1.09} currentCurrency={currencies[0]} />
    </div>
  );
}

export default Converter;
