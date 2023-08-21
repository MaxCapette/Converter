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
  const [nbInput, setNbInput] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState(currencies[0]);
  const [currentTheme, setCurrentTheme] = useState();
  const makeConversion = () => {
    return nbInput * currentCurrency.rate;
  };
  return (
    <div className="Converter">
      <Header amount={nbInput} setNbInput={setNbInput} />
      <Toggler
        isCurrenciesVisible={isCurrenciesVisible}
        setIsCurrenciesVisible={setIsCurrenciesVisible}
      />
      {isCurrenciesVisible && (
        <Currencies
          currencies={currencies}
          setCurrentCurrency={setCurrentCurrency}
        />
      )}
      <Amount result={makeConversion()} currentCurrency={currentCurrency} />
      <Footer nbClicks={nbClicks} setNbClicks={setNbClicks} />
    </div>
  );
}

export default Converter;
