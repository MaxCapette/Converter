import React, { useState } from 'react';
import './Converter.scss';

import Header from '../Header/Header';
import Toggler from '../Toggler/Toggler';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import Footer from '../Footer/Footer';
import currencies from '../../data/currencies';

function Converter() {
  const [isCurrenciesVisible, setIsCurrenciesVisible] = useState(true);
  const [nbClicks, setNbClicks] = useState(0);

  return (
    <div className="Converter">
      <Header amount={nbClicks} />
      <Toggler
        isCurrenciesVisible={isCurrenciesVisible}
        setIsCurrenciesVisible={setIsCurrenciesVisible}
      />
      {isCurrenciesVisible && <Currencies currencies={currencies} />}
      <Amount result={1.09} currentCurrency={currencies[0]} />
      <Footer nbClicks={nbClicks} setNbClicks={setNbClicks} />
    </div>
  );
}

export default Converter;
