import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../../utils/api";
import DecksList from "../Decks/DecksList";

export default function Home({ decks, setDecks }) {
    // load the decks by setting the state
    useEffect(() => {
        async function loadDecks() {
            const loadedDecks = await listDecks();
            setDecks(loadedDecks);
        }
        loadDecks();
    }, [setDecks])

    return (
        <div>
            <Link to="/decks/new" className="btn btn-secondary mb-2">
                <span className="oi oi-plus mr-1"></span>
                Create Deck
            </Link>
            <DecksList decks={decks} />
        </div>
    );
}