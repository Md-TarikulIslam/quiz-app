import React from 'react';
import './Question.css'

const Question = (props) => {
    console.log(props.question)
    const {question, answer, options}=props.question
    return (
        <div>
         
                <p>{question}</p>
               {
                options.map(option => <button className='option-btn'>{option}</button> )
               }
               

      
            
        </div>
    );
};

export default Question;