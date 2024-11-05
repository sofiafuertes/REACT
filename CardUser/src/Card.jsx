import "./Card.css";

// function Card(){
//     return (
//         <>
//         <article className="card">
//             <img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profil photo" />
//         <h2>Gloria</h2>
//         <h3>gloria96@gmail.com</h3>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque earum dolore consequatur provident consequuntur id odit, veritatis consectetur perferendis temporibus dignissimos commodi tempore in reiciendis possimus vel eum suscipit quae!</p>
//         </article>
//         </>
//     )
// }

function Card({ image, pseudo, email, description }) {
    return (
        <>
            <article className="card">
                <img src={image} alt="profil photo" />
                <h2>{pseudo}</h2>
                <h3>{email}</h3>
                <p>{description}</p>
            </article>
        </>
    );
}

export default Card;
