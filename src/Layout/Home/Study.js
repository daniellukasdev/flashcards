import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { readDeck } from "../../utils/api";
import NavBar from "./NavBar";
import StudyCards from "../Cards/StudyCards";
import NotEnoughCards from "../Cards/NotEnoughCards";


export default function Study({ deck, setDeck, isDeck, setIsDeck }) {
    setIsDeck(true);
    const { deckId } = useParams();
    //console.log("params deckId: ", deckId)

    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
    }, [deckId, setDeck])
    
    
    // const cards = deck.cards.map(card => card);
    // console.log("Cards: ", cards)

    return (
        <div>
            <div>
                <NavBar rootName={deck.name} isDeck={isDeck} setIsDeck={setIsDeck} study={true} deck={deck} setDeck={setDeck} />
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