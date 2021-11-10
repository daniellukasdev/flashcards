import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { createCard, updateCard } from "../../utils/api";

export default function AddEditCard({ deck, setDeck, isDeck = true , edit = false }) {

    const [ card, setCard ] = useState({});
    const [ cardFront, setcardFront ] = useState("");
    const [ cardBack, setCardBack ] = useState("");
    const history = useHistory();

    // useEffect(() => {
    //     async function loadDeck() {
    //         const deckFromAPI = await readDeck(deckId);
    //         setDeck(deckFromAPI);
    //     };
    //     loadDeck();
    // }, [deckId, setDeck])

    const newCard = {
        // id: (decks?.length + 1),
        front: cardFront,
        back: cardBack,
    }

    const cardUpdate = {
        id: card.id,
        front: cardFront,
        back: cardBack,
    }
    
    function handleCancelBtn() {
        if (edit) history.go(-1);
        history.push("/");
    }

    const handleFrontChange = (event) => setcardFront(event.target.value);
    const handleBackChange = (event) => setCardBack(event.target.value);

    async function handleSubmit(event) {
        event.preventDefault();
        if(!edit){
            const response = await createCard(newCard);
            history.push(`/decks/${response.id}`);
        } else {
            const response = await updateCard(cardUpdate);
            history.go(-1);
        }

    }
    return (
        <div>
            <div>
                <NavBar 
                rootName={edit ? "Edit Deck" : "Create Deck"} 
                deck={deck} 
                setDeck={setDeck} 
                isDeck={isDeck} 
                />
            </div>
            <div>
                <h1>{edit ? "Edit Deck" : "Create Deck"}</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="cardFront">Front</label>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            id="cardFront" 
                            name="cardFront"
                            value={cardFront}
                            onChange={handleFrontChange}
                            placeholder={edit ? `${card.front}` : "Front side of card"}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label for="cardBack">Back</label>
                        <textarea 
                            className="form-control" 
                            id="cardBack" 
                            rows="4"
                            name="cardBack"
                            value={cardBack}
                            onChange={handleBackChange}
                            placeholder={edit ? `${card.back}` : "Back side of card"}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleCancelBtn();
                        }}className="btn btn-secondary mr-1">Cancel</button>
                        <button type="submit" className="btn btn-primary ml-1">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}