import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Template from "./components/Template";

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

const TODOS = [
    {
        todo : "Lire la documentation de React",
        date : "05/11/2024"
    },
    {
        todo : "Reviser JS",
        date : "06/11/2024"
    },
    {
        todo : "Reviser PHP",
        date : "06/11/2024"
    },
    {
        todo: "Reviser les tableaux JS",
        date : "05/11/2024"
    }
]
function ListTaches({tache,date}){
    return <li>{tache} - {date}</li>
}

function App() {

    return (
        <>
            <Template>
                <h3>Liste de choses a faire: </h3>
                <ul>
                    {TODOS.map(tache => <ListTaches key={TODOS.indexOf(tache)} tache={tache['todo']} date = {tache["date"]} /> )}
                </ul>
            </Template>
        </>
    );
}





// function App() {
//     const DATE = new Date();

//     return (
//         <>
//             <Template>
//                 <ul>
//                     <ToDo toDo={"Lire la documentation de React"}date={DATE.toLocaleString()}/>
//                     <ToDo toDo={"Reviser JS"} date={DATE.toLocaleString()} />
//                     <ToDo toDo={"Reviser PHP"} date={DATE.toLocaleString()} />
//                 </ul>
//             </Template>
//         </>
//     );
// }

function ToDo({ toDo, date }) {
    return (
        <>
            <li>
                {toDo} {date}{" "}
            </li>
        </>
    );
}

export default App;
