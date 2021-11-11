import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { readDeck, readCard, createCard, updateCard } from "../../utils/api";

export default function AddEditCard({ deckId, deck, setDeck, isDeck = true , edit = false }) {
    const [ card, setCard ] = useState({});
    const [ cardFront, setcardFront ] = useState("");
    const [ cardBack, setCardBack ] = useState("");
    const { cardId } = useParams();
    const params = useParams();
    console.log("params from Add: ", params)
    const history = useHistory();

    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
    }, [deckId, setDeck])

    useEffect(() => {
        async function loadCard() {
            const cardFromAPI = await readCard(cardId);
            setCard(cardFromAPI);
        };
        loadCard();
        
    }, [cardId])

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
            history.push("/");
        } else {
            const response = await updateCard(cardUpdate);
        }

    }
    return (
        <div>
            <div>
                <NavBar 
                rootName={`${deck?.name}`} 
                deck={deck} 
                setDeck={setDeck} 
                isDeck={isDeck} 
                />
            </div>
            <div>
                <h2>{edit ? `${deck.name}: Edit Card` : `${deck.name}: Add Card`}</h2>
            </div>
            <div>
                <form onSubmit={handleSaveSubmit}>
                    <div className="form-group">
                        <label for="cardFront">Front</label>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            id="cardFront" 
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
                            rows="3"
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
            </div>
        </div>
    );
}