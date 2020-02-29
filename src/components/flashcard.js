import React, {useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../App.css'

const FlashCard = ({
  resetCards, 
  answer, 
  question, 
  rIdx, 
  slice, 
  end, 
  restart,
  }) => {
  const [side, setSide] = useState(false);
    console.log('side', side);
  return(
    <div className="flashcard" 
    >
      { !end ?
          <div 
            className="flashContainer"
            onClick={()=>setSide(!side)}
          >
            {
              !side ?
                <div className="front"
                >
                  { question } 
                  <div className="click">
                    click to see answer 
                  </div>
                </div>
              :
                <div className="front">
                  { answer }
                </div>
            }
            <div 
             className="right"
             onClick={()=>{
               slice();
               rIdx();
             }}
            > Next </div>
          </div>
        :
        <div id="restart"
          onClick={()=>{
            setSide(false);
            console.log('side', side);
            resetCards();
          }}
        > Click to Restart </div>
      }
    </div>
  )
}

export default FlashCard;
