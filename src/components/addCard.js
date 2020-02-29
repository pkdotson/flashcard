import React, {useState} from 'react';
import  { Button, Form } from 'react-bootstrap'
import '../App.css'

const AddFlashCard = ({addCard, exit}) => {
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  return(
    <div className="form">
      <div className="exit" onClick={exit}>[X]</div>
      <Form.Control 
        size="lg" 
        type="text" 
        value={question}
        placeholder="Enter Question" 
        className="flashInput"
        onChange={(txt)=>{setQuestion(txt.target.value)}}
      />      
      <Form.Control 
        size="lg" 
        type="text" 
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
        Submit
      </Button>
    </div>
  )
}

export default AddFlashCard;
