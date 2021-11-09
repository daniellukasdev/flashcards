import React from "react";
import { Link } from "react-router-dom";

export default function NotEnoughCards( { cards = [], deck = [] }) {
    console.log("deck: ", deck)
    return (
        <div>
            <div>
                <h2>Not enough cards.</h2>
            </div>
            <div>
                <p>You need at least 3 cards to study. Ther are {cards.length} cards this deck.</p>
            </div>
            <div>
                <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary ml-1">
                    <span className="oi oi-plus mr-1"></span>
                    Add Cards
                </Link>
            </div>
        </div>
    );
}