import React from "react"

export default function Meme() {
    return (

        <main>

            <form className="form">
            <input className="form-input" type="text" class="form-control" placeholder="top text" aria-label="input" aria-describedby="basic-addon1"/>
    
            <input className="form-input" type="text" class="form-control" placeholder="bottom text" aria-label="input" aria-describedby="basic-addon1"/>

            <button className="form-button">Get a new meme image</button>

            </form>
        </main>

    )
}