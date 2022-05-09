import React from "react";

function QuestionItem({ question, handleDelete, handleDropdown }) {
  const { id, prompt, answers, correctIndex } = question;

  let options;

   if(answers) {
   options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
   } 

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={(event)=>handleDropdown(id, event.target.value)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={()=> handleDelete(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
