import React, {useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../App.css'

const FlashCard = ({
  resetCards, 
  answer, 
  question, 
  slice, 
  end, 
  restart,
  side,
  nextCard,
  flipCard
  }) => {
  return(
    <div className="flashcard" 
    >
      { !end ?
          <div 
            className="flashContainer"
          >
            <div className="sides" onClick={flipCard}>
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
            </div>
            <div 
             className="next"
             onClick={nextCard}
            > Next </div>
          </div>
        :
        <div id="restart"
          onClick={resetCards}
        > Click to Restart </div>
      }
    </div>
  )
}

export default FlashCard;
