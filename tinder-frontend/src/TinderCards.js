import React, { useEffect, useState } from "react";
import "./TinderCards.css"
import  TinderCard from "react-tinder-card"
import axios from './axios'

function TinderCards() {

    const [pessoas, setPessoas] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards')

            setPessoas(req.data)
        }

        fetchData()
    }, [])

    const swiped = (direction,  nameToDelete) => {
        console.log("removendo: " + nameToDelete)
    }

    const outOfFrame= (name) => {
        console.log(name + " saiu da tela!")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {pessoas.map((person) => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                        <div style={{backgroundImage: "url(" + person.imgUrl + ")"}} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards