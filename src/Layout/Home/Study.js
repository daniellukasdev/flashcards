import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { readDeck } from "../../utils/api";
import NavBar from "./NavBar";
import Card from "../Cards/Card";


export default function Study() {
    const [ deck, setDeck ] = useState([])
    const { deckId } = useParams();
    //console.log("params deckId: ", deckId)

    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
    }, [deckId])
    
    
    // const cards = deck.cards.map(card => card);
    // console.log("Cards: ", cards)

    return (
        <div>
            <div>
                <NavBar deckName={deck.name}/>
            </div>
            <div>
                <h1>{`Study: ${deck.name}`}</h1>
            </div>
            {/* Card should probably only take in a single card and not the array */}
            <Card cards={deck.cards} />
        </div>
    );
}