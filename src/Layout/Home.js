import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api";
import DecksList from "./DecksList";

export default function Home() {
    // create state for deck
    const [ decks, setDecks ] = useState([]);

    useEffect(() => {
        async function loadDecks() {
            const loadedDecks = await listDecks();
            setDecks(loadedDecks);
        }
        loadDecks();
        
    }, [])

    console.log(decks)
    return (
        <div>
            <Link to="/decks/new">Create Deck</Link>
            <DecksList />
        </div>
    );
}