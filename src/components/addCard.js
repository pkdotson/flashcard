import React, {useState} from 'react';
import  { Button, Form } from 'react-bootstrap'
import '../App.css'

const AddFlashCard = ({addCard, exit, shuffleCard, cardArr}) => {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  console.log('cardArr', cardArr);
  return(
    <div className="form">
      <div className="exit" 
        onClick={()=>{
          shuffleCard()
          exit()  
        }}>
        {
          cardArr.length===0 ?
          'Please enter cards into your list'
          :
          'Click To Go Practice!'
        }
      </div>
      <Form.Control 
        size="lg" 
        type="questionText" 
        value={question}
        placeholder="Enter Question" 
        className="flashInput"
        onChange={(txt)=>{setQuestion(txt.target.value)}}
      />      
      <Form.Control 
        size="lg" 
        type="answerText" 
        placeholder="Enter Answer" 
        value={answer}
        className="flashInput"
        onChange={(txt)=>{setAnswer(txt.target.value)}}
      />
      <Button 
        variant="primary" 
        type="submit"
        className="submit"
        onClick={()=>{
          addCard(answer, question);
          setAnswer('');
          setQuestion('');
          alert('Your card has been added!')
        }}
        >
        Add flashcard to List 
      </Button>
    </div>
  )
}

AddFlashCard.defaultProps = {
  cardArr: []
}

export default AddFlashCard;
