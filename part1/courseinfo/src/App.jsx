import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const Header = ({name}) => {
  return  (
    <div> 
    <p> {name} </p>
    </div>
  )
  }

const Part = ({part}) => {
  return (
   <p>
    {part.name}, has {part.exercises} Excercises 
    </p>
  )
}
const Content = ({parts}) => {
  return (
    <div>
      <Part part = {parts[0]} />
      <Part part = {parts[1]} />
      <Part part = {parts[2]} />
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return <p>  Total Excercises = total</p>
    
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 30
      }
    ] 
  }

  return (
    <div>
      <Header name = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App