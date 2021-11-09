import React from "react";
import { Link } from "react-router-dom";

export default function NotEnoughCards( { deckId, cards }) {
    return (
        <div>
            <div>
                <h2>Not enough cards.</h2>
            </div>
            <div>
                <p>You need at least 3 cards to study. Ther are {cards.length} cards this deck.</p>
            </div>
            <div>
                <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary ml-1">
                    <span className="oi oi-plus mr-1"></span>
                    Add Cards
                </Link>
            </div>
        </div>
    );
}