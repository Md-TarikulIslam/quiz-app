import React, { useEffect, useState } from 'react';

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
            questions.map(question=>console.log(question))
          }
        </div>
    );
};

export default Questions;