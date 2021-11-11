import React from "react";
import { Link, useParams } from "react-router-dom";

export default function NavBar({ rootName, edit = false, isCard = false, study=false }) {
    const { deckId } = useParams();
    console.log("params in nav: ", deckId)

    let navItems = <li className="breadcrumb-item"><Link></Link></li>
    if (study) {
        navItems = [
        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
        <li className="breadcrumb-item active" aria-current="page">Study</li>
        ]
    } else if (!edit && isCard) {
        navItems = [
            <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
            <li className="breadcrumb-item active" aria-current="page">Add Card</li>
            ]
    } else if (edit && !isCard) {
        navItems = [
            <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
            <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
            ]
    } else {
        navItems = <li className="breadcrumb-item active" aria-current="page">{`${rootName}`}</li>
    }

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