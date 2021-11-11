import React from "react";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import StudyBtn from "../Buttons/StudyBtn";
import DeleteBtn from "../Buttons/DeleteBtn";

export default function DeckItem({ deck }) {
    const url = useRouteMatch();

    console.log(`URL ${url}/${deck.id}/study`)
    const params = useParams();
    console.log("params: ", params)
    
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
                        <Link to={`/decks/${deck.id}`} 
                            className="btn btn-secondary mr-2">
                            <span className="oi oi-eye mr-1"></span>View
                        </Link>
                        <StudyBtn deckId={deck.id} />
                    </div>
                    <div className="d-flex">
                        <DeleteBtn id={deck.id} isDeck={true} />
                    </div>
                </div>
            </div>
        </li>
        
    );
}