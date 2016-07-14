import React from 'react';
import {Cell} from './cell';
import {get_winner } from '../lib/game_utils';
import {Message} from './message';
export class Board extends React.Component{
    render(){
        let message;
        if((get_winner(this.props.board) === 'X') || (get_winner(this.props.board) === 'O') )
        {
            //this.props.winner=get_winner(this.props.board);
            message= <Message winner={get_winner(this.props.board)} />    
        }
      return(
            <div className="board">
            
            {message}
            {this.props.board.map((i)=>
            i.map((j,index)=>
            <Cell key={index} 
                    cell={j}/>)
            )}
           
            </div> 
            
        );  
    }
    
}

