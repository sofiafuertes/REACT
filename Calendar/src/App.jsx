import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Day from "./composant/Day";

const MONTH = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Déecembre",
];

const DAY = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
];

const DAY_LETTER = DAY.map((letter) => letter[0]);
//console.log(DAY_LETTER);

function App() {
    const ROW = [];
    let count = 0;

    for (let i = 1; i <= 31; i++) {
        ROW.push(<Day key={count++} jour={i} className="backgroundOrange" />);
    }

    return (
        <>
            <article className="card">
                <Day jour={MONTH[9]} className="month" />
            </article>
            <section className="grid-7">
                {DAY_LETTER.map((day) => (
                    <Day key={count++} jour={day} /> ))}
            </section>
            <section className="grid-7 days">
                {ROW}
            </section>
        </>
    );
}

export default App;
