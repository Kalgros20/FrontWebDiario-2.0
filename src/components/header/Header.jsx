import React from 'react';
import { Link } from 'react-router-dom';
import history from '../../history';

const _clickButton = path => {

    history.push(path);

}

const Header = () => {

    return (
        <div>
            <h1>Carl Page</h1> <br />
            <p>Botões com link</p>
            <Link to="/">Home</Link> | <Link to="/teste">Teste</Link>
            <p>Botões com Função</p>
            <span onClick={() => _clickButton('/')}>Home</span> | <span onClick={() => _clickButton('/teste')}>Teste</span>
            
        </div>
    )

}

export default Header;
