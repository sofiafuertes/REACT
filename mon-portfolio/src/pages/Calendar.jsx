import Day from "../components/Day.jsx";
import "../style/Calendar.css"

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

function Calendar() {
    const ROW = [];
    let count = 0;

    for (let i = 1; i <= 31; i++) {
        ROW.push(<Day key={count++} jour={i} className={"backgroundOrange"} />);
    }

    return (
        <>
            <h1>Calendar</h1>
            <article className="month">
                <Day jour={MONTH[9]} className="month" />
            </article>
            <section className="grid-7">
                {DAY_LETTER.map((day) => (
                    <Day key={count++} jour={day} />
                ))}
            </section>
            <section className="grid-7 days">{ROW}</section>
        </>
    );
}

export default Calendar
