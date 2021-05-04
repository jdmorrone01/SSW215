import React ,{useState, useEffect} from 'react';
import Header from './componets/Header';
import Body from './componets/Body';
import Button from 'react-bootstrap/Button';
import firebase from "./firebase";


function App() {

  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const ref = firebase.firestore().collection("music");

  function getMusic() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc)=> {
        items.push(doc.data());
      });
      setMusic(items);
      setLoading(false);
    });
  }

  useEffect(() =>{
    getMusic();
  }, []);

  if(loading)
  {
    return <h1>Working on your request</h1>
  }
  return (
    <div className="App">
      <Header title ="DuckTunes"/>
      <Body words = "Tired of listening to the same music over an over? Looking for something new to spice up your playlist? Introducing DuckTunes!"/>
      <Body words = "DuckTunes finds new music for you based on the songs you already know and love. Simply input your favorite songs and DuckTunes will give amazing suggestions for new music!"/>
      <Button href="Generator">Generator</Button>
      {music.map((song) => (
        <div key ={song.id}>
          {song.genre}
          <p>{song.artist}</p>
          <p>{song.genre}</p>
          
          </div>

      ))}

   </div>
  );
}

export default App;
