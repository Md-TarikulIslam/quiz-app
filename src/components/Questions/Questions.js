import React, { useEffect } from 'react';

const Questions = () => {
    useEffect(()=>{
        fetch('question.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    })
    return (
        <div>
          {

          }
        </div>
    );
};

export default Questions;