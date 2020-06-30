import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'

import axios from 'axios';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [coin, setCoin] = useState('');
  const [crypto, setCrypto] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect( () => {

    const searchCryptoValue = async () => {
      if (coin === '') return;

      //API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;

      const result = await axios.get(url);

      //Show Spinner
      setLoading(true);

      setTimeout(() => {
        //Change State
        setLoading(false);

        // Save Result
        setResult(result.data.DISPLAY[crypto][coin]);
      }, 2500)

    }

    searchCryptoValue();

    

  }, [coin, crypto]);

  //Show Spinner or result
  const component = (loading) ? <Spinner /> : <Result result={result} />

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt="crypto image"
        />
      </div>
      <div>
        <Heading>Cryptocurrencies Calculator</Heading>

        <Form
          setCoin={setCoin}
          setCrypto={setCrypto}
        />
        {component}

      </div>
    </Container>
  );
}

export default App;
