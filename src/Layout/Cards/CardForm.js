import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createCard, updateCard } from "../../utils/api";

export default function CardForm({ card, deckId, edit = false }) {
    /* creates states for card front and back */
    const [ cardFront, setcardFront ] = useState("");
    const [ cardBack, setCardBack ] = useState("");
    
    const history = useHistory();

    /* sets the card front and back states to be
    the current card's front and back, then updates
    when the dependencies change */
    useEffect(() => {
        setcardFront(card.front);
        setCardBack(card.back);
    }, [card.front, card.back])

    // creates an object to store data from inputs
    const newCard = {
        front: cardFront,
        back: cardBack,
    }

    // if editing, creates an object to store data from current card
    const cardUpdate = {
        id: card.id,
        front: cardFront,
        back: cardBack,
        deckId: deckId
    }
    
    // sends user back to deck view when they click cancel
    function handleDoneCancelBtn() {
        history.go(-1);
    }

    /* handles change events for inputs and sets states accordingly */
    const handleFrontChange = (event) => setcardFront(event.target.value);
    const handleBackChange = (event) => setCardBack(event.target.value);

    /* when submit is pressed passes new card and updated card
    objects into the createCard() and updateCard() functions accordingly
    depending on whether the user is creating a card or editing a current card */
    async function handleSaveSubmit(event) {
        event.preventDefault();
        if(!edit){
            const response = await createCard(deckId, newCard);
            console.log(response);
            setcardFront("");
            setCardBack("");
        } else {
            const response = await updateCard(cardUpdate);
            console.log(response);
            history.go(-1);
        }
        
    }

    return (
        <form onSubmit={handleSaveSubmit}>
                    <div className="form-group">
                        <label for="cardFront">Front</label>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            id="cardFront" 
                            rows="2"
                            name="cardFront"
                            value={cardFront}
                            onChange={handleFrontChange}
                            placeholder="Front side of card">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label for="cardBack">Back</label>
                        <textarea 
                            className="form-control" 
                            id="cardBack" 
                            rows="2"
                            name="cardBack"
                            value={cardBack}
                            onChange={handleBackChange}
                            placeholder="Back side of card">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleDoneCancelBtn();
                        }}className="btn btn-secondary mr-1">{edit ? "Cancel" : "Done"}</button>
                        <button type="submit" className="btn btn-primary ml-1">{edit ? "Submit" : "Save"}</button>
                    </div>
                </form>
    );
}