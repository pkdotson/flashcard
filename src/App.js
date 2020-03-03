import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import {shuffle} from './helpers';
import AddCard from './components/addCard.js';
import FlashCard from './components/flashcard.js';

const App = () => {
  const [cardArr, setCardArr] = useState([]);
  const [tempArr, setTempArr] = useState([]);
  const [showFlash, setFlash] = useState(false);
  const [end, setEnd] = useState(false);
  const [side, setSide] = useState(false);
  
  const slice = () => {
    let tpArr = cardArr;
    let temp = tpArr.splice(0, 1);
    setTempArr([...tempArr, ...temp]);
    setCardArr([...tpArr]);
    if(tpArr.length===0) setEnd(true);
  }

  const addFlash =(answer, question) => {
    setCardArr([...cardArr, {answer, question}]); 
  }

  const exit = () => {
    if(cardArr.length > 0) {
      setFlash(true);
    }
  }

  const shuffleCard = () => {
    let newArr = shuffle(cardArr);
    setCardArr([...newArr]); 
  }

  const resetCards =()=>{
    let newTempArr = shuffle(tempArr);
    setCardArr([...newTempArr])
    setTempArr([]);
    setEnd(false);
    setSide(false);
  }

  const nextCard = () => {
    slice();
    setSide(false);
  }

  const flipCard = () => {
    setSide(!side);
  }

  return (
    <div className="App">
     <div className="btnApps">
       <Button 
        variant="success" 
        onClick={()=>setFlash(false)}
        > + Add Card</Button>
       <Button 
        id="clearBtn"
        variant="danger"
        onClick={()=>{
          setCardArr([])
          setFlash(false)
        }}
        >Clear All Cards</Button>
      </div>
     <div className="mainContainer">
       { 
         showFlash ?
            <FlashCard 
              answer={cardArr[0] ? cardArr[0].answer:null} 
              question={cardArr[0] ? cardArr[0].question:null}
              slice={slice}
              end={end}
              side={side}
              resetCards={resetCards}
              nextCard={nextCard}
              flipCard={flipCard}
           />
         :
            <AddCard 
              addCard={addFlash} 
              exit={exit} 
              shuffleCard={shuffleCard}
              cardArr={cardArr}
            /> 
       }
      </div>
    </div>
  );
}

export default App;
