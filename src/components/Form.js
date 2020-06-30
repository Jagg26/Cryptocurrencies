import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Error from './Error';
import useCurrency from '../hooks/useCurrency';
import useCrypto from '../hooks/useCrypto';
import axios from 'axios';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF; 
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Form = ({setCoin, setCrypto}) => {
    //State
    const [ cryptoList, setCryptoList ] = useState([]);
    const [ error, setError ] = useState(false);

    const CURRENCY = [
        { code: 'USD', name: 'USA Dollar' },
        { code: 'MXN', name: 'Peso Mexicano' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Pound Sterling' },
        { code: 'ARS', name: 'Peso Argentino' },
        { code: 'VES', name: 'Bolívar Soberano' }
    ]

    //useCoin
    const [ currency, SelectCurrency] = useCurrency('Choose your currency', '', CURRENCY);

    //useCoin
    const [crypto, SelectCrypto] = useCrypto('Choose you cryptocurrency', '', cryptoList);

    useEffect( () => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const result = await axios.get(url);

            setCryptoList(result.data.Data);
        }

        consultAPI();
    }, []);

    // onSubmit

    const handleChange = e => {
        e.preventDefault();

        //Validate
        if(currency === '' || crypto === ''){
            setError(true);
            return;
        }

        //Main Component
        setError(false);

        setCoin(currency);
        setCrypto(crypto);
    }

    return ( 
        <form
            onSubmit={handleChange}
        >
            {error ? <Error message='All fields are required'/> : null}

            <SelectCurrency />

            <SelectCrypto />

            <Button 
                type="submit"
                value="Calculate"
            />
        </form>
     );
}
 
export default Form;