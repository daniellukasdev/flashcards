import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createCard, updateCard } from "../../utils/api";

export default function CardForm({ card, deckId, edit = false }) {
    const [ cardFront, setcardFront ] = useState("");
    const [ cardBack, setCardBack ] = useState("");
    
    const history = useHistory();

    useEffect(() => {
        setcardFront(card.front);
        setCardBack(card.back);
    }, [card.front, card.back])

    

    // if (edit) {
        //     setcardFront(card.front);
        //     setCardBack(card.back);
        // }
    const newCard = {
        front: cardFront,
        back: cardBack,
    }

    const cardUpdate = {
        id: card.id,
        front: cardFront,
        back: cardBack,
        deckId: deckId
    }
    
    function handleDoneCancelBtn() {
        if (edit) history.go(-1);
        history.push("/");
    }

    const handleFrontChange = (event) => setcardFront(event.target.value);
    const handleBackChange = (event) => setCardBack(event.target.value);

    async function handleSaveSubmit(event) {
        event.preventDefault();
        if(!edit){
            const response = await createCard(deckId, newCard);
            setcardFront("");
            setCardBack("");
        } else {
            const response = await updateCard(cardUpdate);
        }
        history.push("/");
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