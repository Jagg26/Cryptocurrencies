import React from 'react';
import styled from '@emotion/styled';

const ErrorMessage = styled.p`
    background-color: #B7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({message}) => {
    return ( 
        <ErrorMessage>
            {message}
        </ErrorMessage>
     );
}
 
export default Error;