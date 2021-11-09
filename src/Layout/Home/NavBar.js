import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ rootName, isDeck = false }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">
                        <span className="oi oi-home mr-1"></span>
                        Home
                    </Link>
                </li>
                {isDeck ? (
                    (<li className="breadcrumb-item"><Link to="/decks">{`${rootName}`}</Link></li>)
                    (<li className="breadcrumb-item active" aria-current="page">Study</li>)
                    ) : (
                    <li className="breadcrumb-item active" aria-current="page">{`${rootName}`}</li>
                    
                    )}
            </ol>
        </nav>
    );
}