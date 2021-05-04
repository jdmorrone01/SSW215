import React ,{useState, useEffect} from 'react';
import Header from './componets/Header'
import Body from './componets/Body'
import Button from 'react-bootstrap/Button';
import firebase from "./firebase";

function Generator() {

  
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const rock = firebase.firestore().collection("Rock");

  function getMusic() {
    setLoading(true);
    rock.onSnapshot((querySnapshot) => {
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

  return (
    <div className="App">
      <Header title ="DuckTones"/>
      <Body words = "Please type in a song you might like!"/>
      <Button href="./">Home</Button>
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

export default Generator;
