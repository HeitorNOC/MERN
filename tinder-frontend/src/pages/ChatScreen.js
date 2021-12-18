import { Avatar } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header";
import LaraImg from '../img/lara.jpg'
import "./ChatScreen.css"

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Lara',
            image: LaraImg,
            message: 'Oii'
        },
        {
            name: 'Lara',
            image: LaraImg,
            message: 'Tudo bem?'
        },
        {
            to: 'Lara',
            message: 'Salve'
        }
    ])

    const handleSend = e => {
        e.preventDefault()
        setMessages([...messages, {message:input}])
        setInput("")
    }

    return (
        <div className="chatScreen">
            <Header backButton="/chat" />
            <p className="chatScreen__timestamp">VOCÊ DEU MATCH COM LARA SILVA EM 10/12/2021</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}

            <div>
                <form className="chatScreen__input">
                    <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Digite uma mensagem" />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>
            </div>

        </div>
        
    )
}

export default ChatScreen