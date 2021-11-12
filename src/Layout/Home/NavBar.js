import React from "react";
import { Link, useParams } from "react-router-dom";

export default function NavBar({ rootName, edit = false, isCard = false, cardId, study=false }) {
    // gets the deck id from url params
    const { deckId } = useParams();

    // creates a default list item
    let navItems = <li className="breadcrumb-item"><Link></Link></li>
    
    /* if on the study page, displays the following */
    if (study) {
        navItems = [
        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
        <li className="breadcrumb-item active" aria-current="page">Study</li>
        ];
    } else if (edit && isCard) {
        /* if editing a card, displays the following */
        navItems = [
            <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
            <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
            ];
    } else if (!edit && isCard) {
        /* if not editing a card, displays the following */
        navItems = [
            <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
            <li className="breadcrumb-item active" aria-current="page">Add Card</li>
            ];
    } else if (edit && !isCard) {
        /* if editing a deck, displays the following */
        navItems = [
            <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
            <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
            ];
    } else {
        /* in all other pages, displays the following */
        navItems = <li className="breadcrumb-item active" aria-current="page">{`${rootName}`}</li>
    }

    /* displays the url/path information that updates based on where it exists
    it will always render the link to home */
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">
                        <span className="oi oi-home mr-1"></span>
                        Home
                    </Link>
                </li>
                {navItems}
            </ol>
        </nav>
    );
}