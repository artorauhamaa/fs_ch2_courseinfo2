import React from 'react'

const Header = (param) => {
    console.log ("Header", param)
    return (
      <div>
        <h1> {param.name} </h1>
      </div>
    )
  }
  
  const Content = (param) => {
    console.log("Content", param)
    return (
      <div>
        {param.parts.map(part => <p key={part.id}> {part.name}, count {part.exercises}</p>)}
      </div>
    )
  }
  
  const Total = (param) => {
    console.log("Total", param)
    //function add (sum, part) {
    //  return (sum + part.exercises)
    //}
    //var totalExercises = param.parts.reduce(add,0)
    var totalExercises = param.parts.reduce((sum, part) => sum + part.exercises,0)
    return (
      <div>
      <h2> Total {totalExercises}  </h2>
    </div>
    )
  }
  
  const Course =(param)  => {
    console.log("Course", param)
    return(
      <div>
      <Header name = {param.course.name} />
      <Content parts = {param.course.parts} />
      <Total  parts = {param.course.parts} />
      </div>
    )
  }

  export default Course
  