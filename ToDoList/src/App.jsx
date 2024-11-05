import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//  const DATE = new Date();
//  return (
//   <>
//   <h1>TITRE</h1>
//   <h2>Date du jour : {DATE.toLocaleString()} </h2>
//   {ToDo()}
  
//   </>
//  )
// }

// function ToDo(){
//   return(
//     <>
//     <ul>
//       <li>Lire la documentation de React</li>
//       <li>Faire exo 1 de React</li>
//       <li>Faire exo 2 de React</li>
//       <li>Reviser JS</li>
//       <li>Reviser PHP</li>
//       <li>Finir page contact Projet Fil Rouge</li>
//     </ul>
//     </>
//   )
// }

function App() {
 const DATE = new Date();
 
 return (
  <>
  <h1>To do List</h1>
  <ul>
    < ToDo toDo={"Lire la documentation de React"} date= {DATE.toLocaleString()} /> 
    < ToDo toDo={"Reviser JS"} date= {DATE.toLocaleString()} /> 
    < ToDo toDo={"Reviser PHP"} date= {DATE.toLocaleString()} /> 
 </ul>

  
  </>
 )
}

function ToDo({toDo, date}){
  return(
    <>
    <li>{toDo} {date} </li>
    </>
  )
}



export default App
