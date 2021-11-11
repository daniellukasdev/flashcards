import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function StudyCards({ cards = [], deck }) {
    /* declares states and setState functions for setting current card
    and whether the fron or back of the card should be rendered */
    const [ currentCard, setCurrentCard ] = useState(0);
    const [ cardFront, setCardFront ] = useState(true)
    const history = useHistory();

    // handles the flip button
    function flipBtnHandler(event) {
        // when pressed, inverts the state of cardFront
        setCardFront(!cardFront)
    }

    // handles the next button
    function nextBtnHandler(event) {
        /* since the currentCard state starts at 0,
        adds 1 to currentCard in condition to match up with 
        number of cards in array, then sets states accordingly */
        if (currentCard + 1 < cards.length) {
            setCurrentCard(currentCard + 1);
            setCardFront(!cardFront);
        } else {
            // stores the result from the confirm window 
            const restart = window.confirm("Restart cards\n \nClick 'cancel' to return to the home page?");
            /* if "okay" is clicked, go back to first card,
            if cancel is clicked, sends user to home */
            if (restart) {
                setCurrentCard(0);
                setCardFront(true);
            } else {
                history.push("/");
            }
        }
    }

    // renders card information and the front or back of the card depending on state
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