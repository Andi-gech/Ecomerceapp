import React from 'react';

function Table({colomns,Row}) {
  if (colomns){ 
    return (
    <table>
        
        <thead>
            
              {colomns&&
              <tr>
                {colomns.map((item,index)=><th key={index}>{item}</th>)}
             
              </tr>}
              
         
           
            </thead>
    <tbody>

 
    {Row &&
     <tr>
      {Row.map((item,index)=> <td key={index}><p>{item}</p></td>
     )}
     
      </tr>}
    
    
    </tbody>
   
    
  </table>
  );
  }
  if (!colomns){
    return(
<div className='nodataline'><p>No Data Exist</p></div>)
  }
}


export default Table;