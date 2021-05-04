import React from 'react'
import Header from './componets/Header'
import Body from './componets/Body'
import Button from 'react-bootstrap/Button';


function Generator() {
  return (
    <div className="App">
      <Header title ="DuckTones"/>
      <Body words = "Please tye in a song you might like!"/>
      
     
   </div>
  );
}

export default Generator;
