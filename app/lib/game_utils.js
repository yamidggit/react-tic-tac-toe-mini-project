
import {List} from 'immutable';


export const get_winner = (board)=>{
     let rows="";
     let cols=new List;
     let diag1=new List();
     let diag2= new List;
     let winner;
     
   rows=board.map(row=> row);
    for(let i = 0; i <3; i += 1)
    {
        cols=cols.push(board.map(row => row.get(i)));
        
        diag1= diag1.push(rows.get(i).get(i));
        diag2=diag2.push(rows.get(i).get((rows.size-1) -i));
      
    }
   
    for(let i = 0; i <3; i += 1){
        if((rows.get(i).join('') == "XXX") || (rows.get(i).join('')== "OOO"))
            {
                winner= rows.get(i).get(0);  
            }
            
        else if((cols.get(i).join('')== "XXX") || (cols.get(i).join('')== "OOO"))
            {
                winner=cols.get(i).get(0);
            }
          
        else if((diag1.join('')== "XXX") || (diag1.join('')=="OOO"))
            {
                winner= diag1.get(0);
            }
        else  if((diag2.join('')== "XXX") || (diag2.join('')=="OOO"))
        {
            winner= diag2.get(0);
        }
    }
         
    return winner;
};