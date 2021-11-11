import React from "react";
import { Link } from "react-router-dom";

export default function AddCardsBtn({ deckId }) {
    /* crates a button that brings the user to the page to add a card */
    return (
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary ml-2">
            <span className="oi oi-plus mr-1"></span>
            Add Cards
        </Link>
    );
}