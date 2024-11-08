import "../style/Card.css";
import Like from "./Like";

function Card({ image, pseudo, email, description, sexe }) {
    let color = "";
    switch (sexe) {
        case "homme":
            color = "lightblue";
            break;
        case "femme":
            color = "pink";
            break;
        case "non-binaire":
            color = "lemonchiffon";
            break;
    }

    return (
        <article
            className={color + " card"}
            onMouseOver={(event) => event.target.classList.add("border")}
            onMouseLeave={(event) => event.target.classList.remove("border")}
        >
            <img
                onMouseOver={(event) => event.stopPropagation()}
                onMouseLeave={(event) => event.stopPropagation()}
                src={image}
                alt="photo profil"
            />
            <h2
                onMouseOver={(event) => event.stopPropagation()}
                onMouseLeave={(event) => event.stopPropagation()}
            >
                {" "}
                {pseudo}
            </h2>
            <h3
                onMouseOver={(event) => event.stopPropagation()}
                onMouseLeave={(event) => event.stopPropagation()}
            >
                {" "}
                {email}
            </h3>
            <p
                onMouseOver={(event) => event.stopPropagation()}
                onMouseLeave={(event) => event.stopPropagation()}
            >
                {" "}
                {description}
            </p>
            <Like />
        </article>
    );
}

export default Card;
