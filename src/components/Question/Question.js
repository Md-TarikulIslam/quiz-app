import './Question.css'

const Question = (props) => {
    console.log(props.question)
  
    const {id, question, answer, options}=props.question
    return (
        <div>
                <p>{id}. {question}</p>
               {
                options.map(option => <button className='option-btn'>{option}</button> )
               }     
        </div>
    );
};

export default Question;