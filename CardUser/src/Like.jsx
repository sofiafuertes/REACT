import { useState } from "react";
import "./Like.css"

function Like(){
    const [like, setLike] = useState(56)

    function handleClick(event){
        event.target.classList.toggle("like")
    if(event.target.classList.contains("like")){
        setLike(like + 1)
    }else{
        setLike(like - 1)
    }
    }

    return (
        <>
        <div onMouseOver={(event) => event.stopPropagation()}
                onMouseLeave={(event) => event.stopPropagation()}>
            <div className="like" onClick={event=>handleClick(event)}>
                <p>{like} likes</p>
            </div>
        </div>
        </>
    )
}

export default Like