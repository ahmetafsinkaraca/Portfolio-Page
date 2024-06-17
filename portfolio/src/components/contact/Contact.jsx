import React, { useState } from 'react'
import "./contact.scss"

export default function Contact() {
    const[message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

  return (
    <div className='contact' id='contact'>
        <div className="left">
            <img src="./assets/shake.svg" alt="" />
        </div>
        <div className="right">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='E-mail' />
                <textarea name="writting" id="1" cols="300" rows="10"></textarea>
                <button type='submit'>submit</button>
                {message && <span>success</span>}
            </form>
        </div>    
    </div>
  )
}
