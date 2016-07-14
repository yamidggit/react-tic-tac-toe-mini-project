import React from 'react';
import {Board} from './board';

export class App extends React.Component{
    render(){
        
        return(
            <div className="app">
            <h1> {this.props.name}</h1>
            {console.log(this.props.state)}
            
                 <Board board={this.props.state.get("board")} /> 
            
    
            </div>
            
            );
    }
    
}