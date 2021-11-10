import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";

export default function NavBar({ rootName, isDeck, setIsDeck, study=false }) {
    const { deckId } = useParams();
    console.log("params in nav: ", deckId)

    let navItems = <li className="breadcrumb-item"><Link></Link></li>
    if (isDeck && study) {
        navItems = [
        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{`${rootName}`}</Link></li>,
        <li className="breadcrumb-item active" aria-current="page">Study</li>
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