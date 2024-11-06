import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card.jsx";

const USERS = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfEXllGKVMSda3spz8TRTiZP8DNLkWVY3S1rKOIqwXUxpLT0UmB-Hc3GtpSM4fTkH6cc&usqp=CAU",
        pseudo: "Javier",
        sexe: "homme",
        email: "javier@gmail.fr",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero velit, blandit vel sagittis vitae, venenatis et velit. Morbi eu pharetra nulla, ut convallis diam. Donec sed dui id metus cursus eleifend id et massa. Nulla malesuada urna elit, ut mollis nisi vestibulum eget.",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pseudo: "Gloria",
        sexe: "femme",
        email: "gloria96@gmail.com",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero velit, blandit vel sagittis vitae, venenatis et velit. Morbi eu pharetra nulla, ut convallis diam. Donec sed dui id metus cursus eleifend id et massa. Nulla malesuada urna elit, ut mollis nisi vestibulum eget.",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
        pseudo: "José",
        sexe: "non-binaire",
        email: "jose89@gmail.com",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero velit, blandit vel sagittis vitae, venenatis et velit. Morbi eu pharetra nulla, ut convallis diam. Donec sed dui id metus cursus eleifend id et massa. Nulla malesuada urna elit, ut mollis nisi vestibulum eget.",
    },
];

function App() {
    return (
        <>
            {USERS > 0 ? (
                <h1>Liste des utilisateurs</h1>
            ) : (
                <h1>Aucun utilisateur d'inscrit </h1>
            )}
            {USERS.length > 0 && (
                <p>il y a {USERS.length} utilisateurs inscrits!</p>
            )}
            {USERS.map((user) => (
                <Card
                    key={USERS.indexOf(user)}
                    image={user["image"]}
                    sexe={user["sexe"]}
                    pseudo={user["pseudo"]}
                    email={user["email"]}
                    description={user["description"]}
                />
            ))}
        </>
    );
}

export default App;
