import React from "react";
import memesData from "../memesData";

export default function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.round(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
    return (

        <main>

            <div className="form">
            <input className="form-input" type="text" class="form-control" placeholder="top text" aria-label="input" aria-describedby="basic-addon1"/>
    
            <input className="form-input" type="text" class="form-control" placeholder="bottom text" aria-label="input" aria-describedby="basic-addon1"/>

            <button onClick={getMemeImage} className="form-button">Get a new meme image</button>

            </div>
        </main>

    )
}