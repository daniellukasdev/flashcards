import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import NotEnoughCards from "./NotEnoughCards";

export default function StudyCards({ cards = [], deck }) {
    const [ currentCard, setCurrentCard ] = useState(0);
    const [ cardFront, setCardFront ] = useState(true)
    const history = useHistory();

    function flipBtnHandler(event) {
        //event.preventDefault();
        setCardFront(!cardFront)
    }

    function nextBtnHandler(event) {
        //event.preventDefault();
        if (currentCard + 1 < cards.length) {
            setCurrentCard(currentCard + 1);
            setCardFront(!cardFront);
        } else {
            const restart = window.confirm("Restart cards\n \nClick 'cancel' to return to the home page?");
            if (restart) {
                setCurrentCard(0);
                setCardFront(true);
            } else {
                history.push("/");
            }
        }
    }

    return (
        <div className="card">
            <div className="card-body">
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