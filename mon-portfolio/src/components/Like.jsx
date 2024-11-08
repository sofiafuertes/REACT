import { useState } from "react";
import "../style/Like.css"

function Like(){
    const [like, setLike] = useState(56)

    function handleClick(event){
        event.target.classList.toggle("like")
    if(event.target.classList.contains("like")){
        setLike(like + 1)
        event.target.style.backgroundColor = "blue"
        event.target.style.color = "white"
        event.target.style.border = "2px solid white"
    }else{
        setLike(like - 1)
        event.target.style.backgroundColor = "transparent"
        event.target.style.color = "black"
        event.target.style.border = "transparent"
    }}

    return (
        <>
        <div onMouseOver={(event) => event.stopPropagation()}
                onMouseLeave={(event) => event.stopPropagation()}>
            <div className="like" onClick={event=>handleClick(event)}>
                <p> ❤️{like} likes</p>
            </div>
        </div>
        </>
    )
}

export default Like