import React ,{useState, useEffect} from 'react';
import Header from './componets/Header'
import Body from './componets/Body'
import Button from 'react-bootstrap/Button';
import firebase from "./firebase";

function Hiphop()
{
    const [music, setMusic] = useState([]);
    const [loading, setLoading] = useState(false);
   
    const ref = firebase.firestore().collection("Hip-Hop");
  
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
return ( 
    
    <div>
    {music.map((song) => (
        <dl key ={song.id}>
          <dt>{song.song}</dt>
          <dd>{song.artist}</dd>
          
          </dl>

      ))}
</div>
);

}

export default Hiphop;