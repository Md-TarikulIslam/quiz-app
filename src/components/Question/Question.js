import './Question.css'

const Question = (props) => {
    console.log(props.question)
  
    const {id, question, answer, options}=props.question;
  
    return (
        <div className='items'>
          
           <p className='question-item'>{id}. {question}</p>
                
               {
                options.map(option => <button className='option-btn'>{option}</button> )
               }     
        </div>
    );
};

export default Question;