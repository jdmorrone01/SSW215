import React ,{useState, useEffect, Component} from 'react';
import Header from './componets/Header'
import Body from './componets/Body'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/Button';
import firebase from "./firebase";
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Country from './country';
import Hiphop from './hip-hop';
import Jazz from './jazz';
import Pop from './pop';
import Rock from './rock';
import Select from 'react-select';




function Generator() {
const location = '';
const options = [];
  
  
const rock = firebase.firestore().collection("Rock");
const country = firebase.firestore().collection("Country");
const pop = firebase.firestore().collection("Pop");
const jazz = firebase.firestore().collection("Jazz");
const hiphop = firebase.firestore().collection("Hip-Hop");

function getRock() {
  
  
  rock.onSnapshot((querySnapshot) => {
    
    querySnapshot.forEach((doc)=> {
        const item = doc.data();
      options.push({label: item.song_name ,value: 'Rock'});
    });
   
  });
}
function getCountry(){
    country.onSnapshot((querySnapshot) => {
      
      querySnapshot.forEach((doc)=> {
        const item = doc.data();
      options.push({label: item.song_name ,value: 'Country'});
      });
   
    });
}
function getPop()
{
      pop.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc)=> {
            const item = doc.data();
            options.push({label: item.song_name ,value: 'Pop'});
            });
           
          });
        }
        function getJazz(){
            jazz.onSnapshot((querySnapshot) => {
              querySnapshot.forEach((doc)=> {
                const item = doc.data();
                options.push({label: item.song_name ,value: 'Jazz'});
                  });
                  
                });
            }
            function getHiphop()
            {            
            hiphop.onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc)=> {
                const item = doc.data();
                options.push({label: item.song_name ,value: 'Hiphop'});
                });
               
                });
                }
      

   
    

  

useEffect(() =>{
  getRock();
  getCountry();
  getJazz();
  getPop();
  getHiphop();
  
}, []);



  function handleChange(genre)
  {
    alert(genre);
    if( genre == "Rock")
    {
      location = '/Generator/rock';
    }
    else if( genre == "Pop")
    {
      location = '/Generator/pop';
    }
    else if( genre == "Country")
    {
      location = '/Generator/country';
    }
    else if( genre == "Hiphop")
    {
      location = '/Generator/hip-hop';
    }
    else if( genre == "Jazz")
    {
      location = '/Generator/jazz';
    }

  }
  function Test(){
    
    window.location.href = location;
  
  }
  function Home()
  {
    window.location.href = '/';
  }
  

 
  
  return (
    <div className="App">
     
      <Body words = "Please type in a song you might like!"/>
     
      <Select options = {options} />
      <Router>
        <Route  path = "/Generator/country" exact component ={Country}/>
        <Route  path = "/Generator/pop" exact component ={Pop}/>
        <Route  path = "/Generator/rock" exact component ={Rock}/>
        <Route  path = "/Generator/jazz" exact component ={Jazz}/>
        <Route  path = "/Generator/hip-hop" exact component ={Hiphop}/>
        

      </Router> 
      <ButtonGroup>
      <Button  onClick = {Test}>Country</Button>
      <Button onClick = {Home}>Home</Button>
      </ButtonGroup>
      {/* {music.map((song) => (
        <div key ={song.id}>
          <h2>{song.artist}</h2>
          <p>{song.song}</p>
          
          </div>

      ))} */}
     
   </div>
  );
}

export default Generator;
