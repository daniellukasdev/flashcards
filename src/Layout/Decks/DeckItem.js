import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function DeckItem({ deck }) {
    const url = useRouteMatch();
    
    return (
        <li key={deck.id} className="card" >
            <div className="card-body">
                <div className="d-flex justify-content-between">
                <h4 className="card-title">{deck.name}</h4>
                <p className="card-text text-secondary">{`${deck.cards.length} cards`}</p>
                </div>
                <p className="card-text">{deck.description}</p>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex">
                        <Link to={`${url}/${deck.id}`} 
                            className="btn btn-secondary mr-2">
                            <span className="oi oi-eye mr-1"></span>View
                        </Link>
                        <Link to={`${url}/${deck.id}/study`} 
                            className="btn btn-primary">
                            <span className="oi oi-book mr-1"></span>Study
                        </Link>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-danger">
                            <span className="oi oi-trash"></span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
        
    );
}