import React from "react";
import { Link } from "react-router-dom";

export default function AddCardsBtn({ deckId }) {
    return (
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary ml-2">
            <span className="oi oi-plus mr-1"></span>
            Add Cards
        </Link>
    );
}