import { useState } from "react";
import Template from "../components/Template";
import '../style/ToDoList.css'

const TODOS = [
    {
        todo: "Lire la documentation de React",
        date: "05/11/2024",
        checked: true,
        heure: 5,
        categorie: "React",
    },
    {
        todo: "Reviser JS",
        date: "06/11/2024",
        checked: false,
        heure: 22,
        categorie: "JavaScript",
    },
    {
        todo: "Reviser PHP",
        date: "06/11/2024",
        checked: false,
        heure: 18,
        categorie: "PHP",
    },
    {
        todo: "Reviser les tableaux JS",
        date: "05/11/2024",
        checked: false,
        heure: 10,
        categorie: "JavaScript",
    },
];




function ToDoList(){
    const [todo,setTodo] = useState(TODOS)
    
    console.log(todo)
    function handleSubmit(event) {
        event.preventDefault();
        // const INPUTS = document.querySelectorAll("input[type=text]");
        // INPUTS.forEach((element) => console.log(element.value));

        const newTodo = {
            todo : event.target[0].value,
            date : event.target[1].value,
            heure : parseInt(event.target[2].value),
            categorie : event.target[3].value
        }

        console.log(newTodo)
        const tab=[...todo,newTodo]

        setTodo(tab)
        
        
    }

    const [PHP, setPHP] = useState(true);
    const [JavaScript, setJavaScript] = useState(true);
    const [React, setReact] = useState(true);

    const TODOLIST = todo.filter((element) => {
        if (element.categorie == "PHP" && !PHP == true) {
            return false;
        }
        if (element.categorie == "JavaScript" && !JavaScript == true) {
            return false;
        }
        if (element.categorie == "React" && !React == true) {
            return false;
        } else {
            return true;
        }
    });

    return (
        <>
            <Template>
                <h3>Liste de choses a faire: </h3>
                <section>
                    <h4>Categories</h4>
                    <input
                        type="checkbox" name="PHP" checked={PHP} onChange={() => setPHP(!PHP)}
                    />
                    <label htmlFor="PHP">PHP</label>
                    <input
                        type="checkbox" name="JavaScript" checked={JavaScript} onChange={() => setJavaScript(!JavaScript)}
                    />
                    <label htmlFor="PHP">JavaScript</label>
                    <input
                        type="checkbox" name="React" checked={React} onChange={() => setReact(!React)} 
                    />
                    <label htmlFor="PHP">React</label>
                </section>
                <ul>
                    {TODOLIST.map((todo) => (
                        <ToDo
                            key={TODOS.indexOf(todo)}
                            todo={todo["todo"]}
                            date={todo["date"]}
                            checked={todo["checked"]}
                            heureRestante={todo["heure"]}
                        />
                    ))}
                </ul>
                <Form onSubmit={(event) => handleSubmit(event)} />
            </Template>
        </>
    );

}


function ToDo({ todo, date, checked, heureRestante }) {
    const [heure, setHeure] = useState(heureRestante);

    console.log(heure);

    function handleClickMinus() {
        if (heure > 0) {
            setHeure(heure - 1);
        }
    }

    function handleClickPlus() {
        setHeure(heure + 1);
    }

    // function handleClick() {
    //     alert(todo);
    // }

    if (checked) {
        return (
            <>
                <li className="green" /*onClick={handleClick}*/>
                    <input type="checkbox" defaultChecked /> {todo} - {date} - {heure}{" "}
                    <button onClick={handleClickMinus}>-</button>{" "}
                    <button onClick={handleClickPlus}>+</button>
                </li>
            </>
        );
    }
    return (
        <li className="orange" /*onClick={handleClick}*/>
            {todo} - {date} - {heure}{" "}
            <button onClick={handleClickMinus}>-</button>{" "}
            <button onClick={handleClickPlus}>+</button>
        </li>
    );
}

function Form({ onSubmit }) {
    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text" name="todo" placeholder="La ToDo" onChange={handleChange}
                />
                <input
                    type="text" name="date" placeholder="La Date" onChange={handleChange}
                />
                <input type="number" name="heures" placeholder="Heures" onChange={handleChange} 
                />
                <input type="text" name="categorie" placeholder="Categorie" onChange={handleChange}
                />
                <input type="submit" value="Ajouter"/>
            </form>
        </>
    );
}




// function TodoTernaire({ todo, date, checked }) {
//     return checked ? (
//         <li className="green">
//             <input type="checkbox" defaultChecked /> {todo} - {date}
//         </li>
//     ) : (
//         <li className="orange">
//             {todo} - {date}
//         </li>
//     );
// }

// function TodoAnd({ todo, date, checked }) {
//     return (
//         <li>
//             {todo} - {date}{" "}
//             {checked && <input type="checkbox" defaultChecked />}
//         </li>
//     );
// }


export default ToDoList