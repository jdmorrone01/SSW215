import React ,{useState, useEffect} from 'react';
import Header from './componets/Header';
import Body from './componets/Body';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Button';
import firebase from "./firebase";
import {BrowserRouter as Router,Route, Link} from "react-router-dom"
import Generator from "./Generator"


function Home(){


    return (

    <div>

      <Body words = "Tired of listening to the same music over an over? Looking for something new to spice up your playlist? Introducing DuckTunes!"/>
      <Body words = "DuckTunes finds new music for you based on the songs you already know and love. Simply input your favorite songs and DuckTunes will give amazing suggestions for new music!"/>
 <ButtonGroup>
  <Button href="./Generator">Generator</Button>
  </ButtonGroup>
    </div>
    )
}

export default Home;