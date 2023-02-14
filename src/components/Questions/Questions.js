import React, { useEffect, useState } from 'react';
import './Questions.css'


const allQuestion = [
  {
    id: "1",
    question: "What file extension (file type) will you use to save a website file? ",
    options: [
     "html",
     ".web",
     ".html",
     "chrome"
    ],
    answer: ".html"
  },
  {
    id: "2",
    question: "What is the meaning of HTML?",
    options: [
     "HyperText Makeup Language",
     "How To Meet Ladies",
     "HyperText Markup Language",
     "Himel Tomar Mama Lage"
    ],
    answer: "HyperText Markup Language"
  },
  {
    id: "3",
    question: "How would you write a paragraph for a website (pay attention)?",
    options: [
     "<p/>paragraph</p>",
     "<p>I am a paragraph<p>",
     "<p I am a paragraph>",
     "<p>I am a Paragraph</p>"
    ],
    answer: "<p>I am a Paragraph</p>"
  },
  {
    id: "4",
    question: "How many HTML heading tags are there?",
    options: [
     "8",
     "10",
     "6",
     "3"
    ],
    answer: "6"
  },
  {
    id: "5",
    question: "Which one is the third biggest heading tag?",
    options: [
     "<h3>I am the one</h3>",
     "<h1>I am the one</h1>",
     "<h2>I am the one</h2>",
     "<h4>I am the one</h4>"
    ],
    answer: "<h3>I am the one</h3>"
  },
  {
    id: "6",
    question: "If you click on an anchor tag, where will it usually open (if needed, try it out yourself).",
    options: [
     "It will open in a new tab",
     "It will open in the current tab",
     "Abbu basai, can not open the door now",
     "It will open new browser window"
    ],
    answer: "It will open in the current tab"
  },
  {
    id: "7",
    question: "How will you write a list item tag containing the word mobile?",
    options: [
     "<ul>mobile</ul>",
     "<ol>mobile</ol>",
     "<li>mobile</li>",
     "<item>mobile</item>"
    ],
    answer: "<li>mobile</li>"
  },
  {
    id: "8",
    question: "How would you write a button tag?",
    options: [
     "<button></button>",
     "<buton></buton>",
     "<btn></btn>",
     "<buttn></buttn>"
    ],
    answer: "<button></button>"
  },
  {
    id: "9",
    question: "Which attribute is not a part of the input tag?",
    options: [
     "type",
     "src",
     "placeholder",
     "name"
    ],
    answer: "src"
  },
  {
    id: "10",
    question: "Which tag will you use to add style on your website?",
    options: [
     "<css></css>",
     "<color></color>",
     "<style></style>",
     "<head></head>"
    ],
    answer: "<style></style>"
  }
]



const Questions = () => {
    const [count, setCount] = useState(1)
    const [timer, setTimer] =useState(3000)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

   
    useEffect(()=>{

      if(timer<=0 ){
        setCount(count+1) 
        setTimer(3000)
      }
 
     if(count === allQuestion.length){
      
      setCount(allQuestion.length)
      setTimeout(()=>{
        setTimer(0)
        setShowScore(true)
      },[3000])
     }
     
  
 
    
  },[count, timer])

  useEffect(()=>{
    if(count<=allQuestion.length){
      let timer1 =  setTimeout(()=>{
        setTimer(timer-1000)
      },[1000]);
      return ()=>{
        clearTimeout(timer1, timer)
      }; 
    }
  },[timer, count])

  const handleButton = (countObj, answer)=>{
    // console.log(countObj,answer)

    // setTimeout(() => {
    //   setTimer(timer-2000)
    //  }, 1000);

    if(countObj?.answer===answer)
    {
   

      setScore(score+1);
      
        }
        if(count<allQuestion.length)
        {
         
          setCount(count+1)    
        }
        else{
          setShowScore(true);
        }
  }

  console.log(count, allQuestion.length)

    return (
        <div>
          <div>
          </div>
        {(showScore && count===allQuestion.length )? (
          <div>
            Your score is {score} out of {allQuestion.length}
          </div>
        ) : (
        
          <div className='items'>
          <h2 className='timer'>{timer/1000}</h2>
          <div className='question-item'>
         
          {allQuestion[count-1].id}
          <span>. </span>
          {allQuestion[count-1].question}
          </div>
        <div className='option-area'>
        {
          allQuestion[count-1].options.map((option)=>(
            
            <button key={option} className='btn' onClick={()=>handleButton(allQuestion[count-1], option, timer)}>{option}</button>
          ))
        }
        </div>
      
        </div>
        )}
        </div>
    );
};

export default Questions;  