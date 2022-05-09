import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList(props) {

  const [questions, setQuestions] = useState()

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then((r)=>r.json())
    .then((data)=>setQuestions(data))
  }, [])

  let questionArrays;

  if (questions) {
   questionArrays = questions.map((question)=>{
    return <QuestionItem key={question.id} question={question} handleDropdown={handleDropdown} handleDelete={handleDelete} />
  })
}

  console.log("questions:", questions)

  function handleDelete(question) {
    console.log("question;", )
    fetch(`http://localhost:4000/questions/${question.id}`,
  {
   method: "DELETE",
 })
   .then((r) => r.json())
   .then(() => {
    let updatedQuestions;
    if (questions) {
     updatedQuestions = questions.filter((deletedQuestion)=> {
       return question.id !== deletedQuestion.id
     });
     }
     console.log("deleted:", updatedQuestions)
     setQuestions(updatedQuestions);
   });
  } 

   function handleDropdown(id, index) {
     fetch(`http://localhost:4000/questions/${id}`, {
       method: "PATCH",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({
         correctIndex: index
       })
     })
     .then(r => r.json())
     .then((updatedQuestion) => {
       //const newCollection = questions
       
     })
     console.log("questions", questions)
    }
   

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionArrays}</ul>
    </section>
  );
}

export default QuestionList;
