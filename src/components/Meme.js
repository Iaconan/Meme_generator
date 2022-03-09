import React from "react";
import memesData from "../memesData";

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("")


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.round(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return (

        <main>

            <div className="form">
            <input className="form-input" type="text" class="form-control" placeholder="top text" aria-label="input" aria-describedby="basic-addon1"/>
    
            <input className="form-input" type="text" class="form-control" placeholder="bottom text" aria-label="input" aria-describedby="basic-addon1"/>

            <button onClick={getMemeImage} className="form-button">Get a new meme image</button>

            <img className="meme-image" src={memeImage} alt="memeimage"/>

            </div>
        </main>

    )
}