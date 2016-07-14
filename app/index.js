import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app'
import {fromJS} from 'immutable';

require('./css/aplication.scss');

const initialState = fromJS({
    board: [ ['O', 'O', 'O'],
             ['X', 'O', 'O'],
             ['X', '', ''] ],
    gameOver: true,
    winner: 'O'
});
/*
const initialState = fromJS({
    board: [ ['X', 'O', ''],
             ['', 'O', 'O'],
             ['X', '', 'X'] ],
    gameOver: false,
    winner: undefined
});*/


ReactDOM.render(
    <App name="Tic Tac Toe" state={initialState} />,
    document.getElementById('app')
    );
