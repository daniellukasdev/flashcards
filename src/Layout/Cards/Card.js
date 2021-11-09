import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NotEnoughCards from "./NotEnoughCards";

export default function Card({ cards = [] }) {
    const [ currentCard, setCurrentCard ] = useState(0);
    const [ cardFront, setCardFront ] = useState(true)

    const { deckId } = useParams();
    console.log("params: ", deckId)

    // if there are two or fewer cards, display the following instead
    if (cards.length <= 2) {
        return (
            <NotEnoughCards deckId={deckId} cards={cards} />
        );
    }

    function flipBtnHandler(event) {
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