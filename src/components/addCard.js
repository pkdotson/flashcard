import React, {useState} from 'react';
import  { Button, Form } from 'react-bootstrap'
import '../App.css'

const AddFlashCard = ({addCard, exit, rIdx}) => {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  return(
    <div className="form">
      <div className="exit" onClick={()=>{
        rIdx(false)
        exit()  
        }}>[X]</div>
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

export default AddFlashCard;
