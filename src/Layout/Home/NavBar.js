import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ deckName }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">
                        <span className="oi oi-home mr-1"></span>
                        Home
                    </Link>
                </li>
                <li className="breadcrumb-item"><Link to="/decks">{`${deckName}`}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Study</li>
            </ol>
        </nav>
    );
}