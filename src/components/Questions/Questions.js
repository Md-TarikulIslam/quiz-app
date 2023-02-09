import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';

const Questions = () => {
    const [questions, setQuestions] = useState([])
    useEffect(()=>{
        fetch('question.json')
        .then(res=>res.json())
        .then(data=>setQuestions(data))
    },[])
    return (
        <div>
          <h2>{questions.length}</h2>
          {
            // setInterval(function(){
              questions.map((question)=> <Question
              key={question.id}
              question={question}
              ></Question>)
            }
            {/* , 1000)}  */}
      
        </div>
    );
};

export default Questions;