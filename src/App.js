import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

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
      console.log('tpArr', tpArr);
      let temp = tpArr.splice(idx, 1);
      console.log('temp', temp);
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
  const rIdx = () => {
    let id = (Math.floor(Math.random() * cardArr.length));
    setIdx(id);
  }
  const resetCards =()=>{
    setCardArr([...tempArr])
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
        onClick={()=>setCardArr([])}
        >Clear All Cards</Button>
      </div>
     <div className="mainContainer">
       { 
         showFlash ?
          <FlashCard 
            answer={cardArr.length > 0 ? cardArr[idx].answer : null} 
            question={cardArr.length > 0 ? cardArr[idx].question: null}
            rIdx={rIdx}
            slice={slice}
            end={end}
            resetCards={resetCards}
         />
         :
          <AddCard addCard={addFlash} exit={exit}/> 

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
