import React from "react";
import { Link } from "react-router-dom";

export default function EditBtn({ deckId, cardId }) {
    // creates a button, when clicked, takes user to the desired deck or card to edit
    return (
        <Link 
            to={
                cardId 
                ? `/decks/${deckId}/cards/${cardId}/edit` 
                : `/decks/${deckId}/edit`} className="btn btn-secondary mr-2" >
                <span className="oi oi-pencil mr-1"></span>
                Edit
        </Link>
    );
}