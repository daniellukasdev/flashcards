import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Nav({ deckId }) {
    const params = useParams();
    console.log(params);
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/"><span className="oi oi-home mr-1"></span>Home</Link></li>
                <li className="breadcrumb-item"><Link to="/decks">{`${deckId}`}</Link></li>
            </ol>
        </nav>
    );
}