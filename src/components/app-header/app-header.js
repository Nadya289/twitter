import React from 'react';
import '../app-header/app-header.css';

import styled from 'styled-components';

const Header = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
        :hover{
            color:white;
        }
        color: ${props => props.colored ? 'red' : 'black'}

    }
    h2{
        font-size: 1.2rem;
        color: grey;
    }
`


const Appheader = () => {
    return(
        <Header>
            <h1>Lui Fotilyane</h1>
            <h2>5 записейб из них понравилост 4</h2>
        </Header>
    )
}
export default Appheader;