import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import CardForm from "../Cards/CardForm";
import { readDeck, readCard } from "../../utils/api";

export default function AddEditCard({ deck, setDeck, isDeck = true , edit = false }) {
    const [ card, setCard ] = useState({});
    const { deckId, cardId } = useParams();
    const params = useParams();
    console.log("params from Add: ", params)

    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
    }, [deckId, setDeck])
    
    useEffect(() => {
        if (edit) {
            async function loadCard() {
                const cardFromAPI = await readCard(cardId);
                setCard(cardFromAPI);
            };
            loadCard();
        }  
    }, [cardId, edit])

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
                <CardForm 
                card={card}  
                deckId={deck.id} 
                edit={edit} />
            </div>
        </div>
    );
}