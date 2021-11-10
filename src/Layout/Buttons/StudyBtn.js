import React from "react";
import { Link } from "react-router-dom";

export default function StudyBtn({ deckId }) {
    return (
        <Link to={`decks/${deckId}/study`} className="btn btn-primary">
            <span className="oi oi-book mr-1"></span>
            Study
        </Link>
    );
}