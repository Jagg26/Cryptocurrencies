import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span {
        font-weight:bold;
    }
`;

const Price = styled.p`
    font-size: 30px;

    span {
        font-weight:bold;
    }
`;

const Result = ({result}) => {
    if(Object.keys(result).length === 0) return null;

    return ( 
        <ResultDiv>
            <Price>The Price is: <span>{result.PRICE}</span> </Price>
            <Info>Higher Price of the day: <span>{result.HIGHDAY}</span> </Info>
            <Info>Lower Price of the day: <span>{result.LOWDAY}</span> </Info>
            <Info>Last 24 hours: <span>{result.CHANGEPCT24HOUR}</span> </Info>
            <Info>Last Update: <span>{result.LASTUPDATE}</span> </Info>
        </ResultDiv>
     );
}
 
export default Result;