import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Template from "./components/Template";

const TODOS = [
    {
        todo: "Lire la documentation de React",
        date: "05/11/2024",
        checked: false,
    },
    {
        todo: "Reviser JS",
        date: "06/11/2024",
        checked: true,
    },
    {
        todo: "Reviser PHP",
        date: "06/11/2024",
        checked: false,
    },
    {
        todo: "Reviser les tableaux JS",
        date: "05/11/2024",
        checked: true,
    },
];

function App() {
    return (
        <>
            <Template>
                <h3>Liste de choses a faire: </h3>
                <ul>
                    {TODOS.map((todo) => (
                        <ToDo
                            key={TODOS.indexOf(todo)}
                            todo={todo["todo"]}
                            date={todo["date"]}
                            checked={todo["checked"]}
                        />
                    ))}
                </ul>
            </Template>
        </>
    );
}

function ToDo({ todo, date, checked }) {
    if (checked) {
        return (
            <li className="green"><input type="checkbox" defaultChecked/> {todo} - {date}</li>
        )}
    return (
        <li className="orange">{todo} - {date}</li>
    )
}

function TodoTernaire({ todo, date, checked }){
    return (
        checked ? <li className="green"><input type="checkbox" defaultChecked/> {todo} - {date}</li> :
        <li className="orange">{todo} - {date}</li>
    )
}

function TodoAnd({ todo, date, checked }){
    return (
        <li>{todo} - {date} {checked && <input type="checkbox" defaultChecked/> }</li>
    )
}



export default App;
