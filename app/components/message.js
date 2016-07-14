import React from 'react';

export class Message extends React.Component{
    render(){
        return(
            <div className= "message">
                <p>{this.props.winner} won the game</p>
                <button>Next Game</button>
            </div>
        );
    }
}

