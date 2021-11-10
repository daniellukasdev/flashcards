import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ rootName, isDeck = false }) {
    let navItems = <li className="breadcrumb-item"><Link></Link></li>
    if (isDeck) {
        navItems = [
        <li className="breadcrumb-item"><Link to="/decks">{`${rootName}`}</Link></li>,
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