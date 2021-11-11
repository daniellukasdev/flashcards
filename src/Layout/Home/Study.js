import React, { useEffect } from "react";
import { useParams } from "react-router";
import { readDeck } from "../../utils/api";
import NavBar from "./NavBar";
import StudyCards from "../Cards/StudyCards";
import NotEnoughCards from "../Cards/NotEnoughCards";


export default function Study({ deck, setDeck, isDeck = true }) {
    const { deckId } = useParams();

    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
    }, [deckId, setDeck])

    return (
        <div>
            <div>
                <NavBar 
                rootName={deck.name} 
                isDeck={isDeck}  
                study={true} 
                deck={deck} 
                setDeck={setDeck} />
            </div>
            <div>
                <h1>{`Study: ${deck.name}`}</h1>
            </div>
            {deck.cards?.length > 2 ? (<StudyCards cards={deck.cards} deck={deck} />
            ) : (
            <NotEnoughCards deckId={deckId} cards={deck.cards} deck={deck} />
            )}   
        </div>
    );
}