import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Converter.scss';

import Header from '../Header/Header';
import Toggler from '../Toggler/Toggler';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import Footer from '../Footer/Footer';
import currenciesData from '../../data/currencies';
import { ICurrency } from '../../@types/converter';

function Converter() {
  const [isCurrenciesVisible, setIsCurrenciesVisible] = useState(true);
  const [nbClicks, setNbClicks] = useState(0);
  const [amount, setAmount] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [currency, setCurrency] = useState(currenciesData[0]);
  const [total, setTotal] = useState(0);
  const [currentTheme, setCurrentTheme] = useState();

  useEffect(
    // la callback executée àpres la premier rendu uniquement
    () => {
      const asynRequest = async () => {
        // appel avec axios et async await
        try {
          const result = await axios.get(
            'https://api.exchangerate.host/symbols'
          );
          setCurrencies(Object.values(result.data.symbols));
        } catch (e) {
          console.log('ERREUR de requete');
          // ici on peut afficher une erreur dans notre composant
        }
      };

      asynRequest();
    },
    // tableau vide pour executer la callback uniquement après le premier rendu
    []
  );

  // useEffect(
  //   () => {
  //     // on utilise les données du state pour faire un appel api pour avoir le montant calculé
  //     // aller faire un appel vers https://api.exchangerate.host/convert?from=EUR&to=JPY&amount=42
  //     // pour recuperer le montant converti

  //     const getResultFromAPI = async () => {
  //       // si ce n'est pas le tout premier rendu et qu'on a bien une devise courante
  //       if (currency) {
  //         const result = await axios.get(
  //           `https://api.exchangerate.host/convert?from=EUR&to=${currency?.code}&amount=${amount}`
  //         );

  //         console.log(result);

  //         // on met dans le state le result pour que Amount puisse s'en servir
  //         setTotal(result.data.result);
  //       }
  //     };
  //     getResultFromAPI();
  //   },
  //   // on va fetch le total que si amount ou currency est modifié au cours du rendu
  //   [amount, currency]
  // );

  return (
    <div className="Converter">
      <Header amount={amount} setAmount={setAmount} />
      <Toggler
        isCurrenciesVisible={isCurrenciesVisible}
        setIsCurrenciesVisible={setIsCurrenciesVisible}
      />
      {isCurrenciesVisible && (
        <Currencies list={currencies} setCurrency={setCurrency} />
      )}
      <Amount result={total} currentCurrency={currency} />
      <Footer nbClicks={nbClicks} setNbClicks={setNbClicks} />
    </div>
  );
}

export default Converter;
