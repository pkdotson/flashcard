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
  const [idx, setIdx] = useState(0);
  const [end, setEnd] = useState(false);

  const slice = () => {
      let tpArr = cardArr;
      let temp = tpArr.splice(idx, 1);
      setTempArr([...tempArr, ...temp]);
      setCardArr([...tpArr]);
      console.log('tpArr', tpArr);
      if(tpArr.length===0) setEnd(true);
  }

  const addFlash =(answer, question) => {
    setCardArr([...cardArr, {answer, question}]); 
  }
  console.log('add card', cardArr);
  const exit = () => {
    if(cardArr.length > 0) {
      setFlash(true);
    }
  }
  const rIdx = () => {
    let newArr = shuffle(cardArr);
    setCardArr([...newArr]); 
  }

  const resetCards =()=>{
    let newTempArr = shuffle(tempArr);
    setCardArr([...newTempArr])
    setTempArr([]);
    setEnd(false);
  }
  return (
    <div className="App">
     <div className="btnApps">
       <Button 
        variant="success" 
        onClick={()=>setFlash(false)}
        > + Add Card</Button>
       <Button 
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
            rIdx={rIdx}
            slice={slice}
            end={end}
            resetCards={resetCards}
         />
         :
          <AddCard addCard={addFlash} exit={exit} rIdx={rIdx}/> 

       }
    </div>
    </div>
  );
}

export default App;


/*     {
       showFlash === true ?
        <AddCard />
       :
        null
     } */
