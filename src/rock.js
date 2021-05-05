import React ,{useState, useEffect} from 'react';
import Header from './componets/Header'
import Body from './componets/Body'
import Button from 'react-bootstrap/Button';
import firebase from "./firebase";

function Rock()
{
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
    
    <div>
         <h3>Here are Your recomended songs!</h3>
    {music.map((song) => (
        <dl key ={song.id}>
        <dt>{song.song}</dt>
        <dd>{song.artist}</dd>
        
        </dl>

      ))}
</div>
);

}

export default Rock;