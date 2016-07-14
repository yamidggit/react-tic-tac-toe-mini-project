import React from 'react';

export class Cell extends React.Component{
    render(){
      
      return(
            <div  className="cell"> 
                <div className="new_span">{this.props.cell}</div>
            </div>
        );  
    }
}