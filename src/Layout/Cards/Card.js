import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Card({ cards = [] }) {
    const [ currentCard, setCurrentCard ] = useState(0);
    const [ cardFront, setCardFront ] = useState(true)

    const { deckId } = useParams();
    console.log("params: ", deckId)

    if (cards.length <= 2) {
        return (
            <div>
                <div>
                    <h2>Not enough cards.</h2>
                </div>
                <div>
                    <p>You need at least 3 cards to study. Ther are {cards.length} cards this deck.</p>
                </div>
                <div>
                <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary ml-1">
                    <span className="oi oi-plus mr-1"></span>
                    Add Cards
                </Link>
                </div>
            </div>
        );
    }

    function flipBtnHandler(event) {
        //console.log()
        setCardFront(!cardFront)
    }

    function nextBtnHandler(event) {
        console.log(event.target)
        if (currentCard + 1 < cards.length) {
            setCurrentCard(currentCard + 1);
            setCardFront(!cardFront);
        } else {
            const restart = window.confirm("Restart cards?");
            if (restart) {
                setCurrentCard(0);
                setCardFront(true);
            }
        }
    }

    
    // switch and route to change card
    return (
        <div className="card">
            <div className="card-body">
                {/* <p>{cards.length}</p> */}
                <div className="card-title">
                    <h4>{`Card ${currentCard + 1} of ${cards.length}`}</h4>
                </div>
                <div>
                    <p>{cardFront ? (
                        `${cards[currentCard].front}`
                        ) : (
                            `${cards[currentCard].back}`
                            )}</p>
                </div>
                <div>
                    <button onClick={(event) => {
                        flipBtnHandler(event);
                        }} className="btn btn-secondary mr-1">Flip</button>
                    {!cardFront && <button onClick={(event) => {
                        nextBtnHandler(event);
                        }} className="btn btn-primary ml-1">Next</button>}
                </div>
            </div>

        </div>
    );
}