import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import CardForm from "../Cards/CardForm";
import { readDeck, readCard } from "../../utils/api";

export default function AddEditCard({ deck, setDeck, edit = false }) {
    // creates states for card
    const [ card, setCard ] = useState({});
    // gets deck and card id from url params
    const { deckId, cardId } = useParams();

    /* loads the deck with the id from params */
    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
    }, [deckId, setDeck])
    
    /* if editing, loads the card with the card id from params */
    useEffect(() => {
        if (edit) {
            async function loadCard() {
                const cardFromAPI = await readCard(cardId);
                setCard(cardFromAPI);
            };
            loadCard();
        }  
    }, [cardId, edit])

    /* displays add or edit page depending on what button was pressed */
    return (
        <div>
            <div>
                <NavBar 
                rootName={`${deck?.name}`} 
                isCard={true}
                cardId={cardId} 
                edit={edit}
                deck={deck} 
                setDeck={setDeck} 
                />
            </div>
            <div>
                <h2>{edit ? `${deck.name}: Edit Card` : `${deck.name}: Add Card`}</h2>
            </div>
            <div>
                <CardForm 
                card={card}  
                deckId={deck.id} 
                edit={edit} />
            </div>
        </div>
    );
}