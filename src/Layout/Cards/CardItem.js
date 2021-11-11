import React from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import DeleteBtn from "../Buttons/DeleteBtn";
import EditBtn from "../Buttons/EditBtn";

export default function CardItem({ deckId,card }) {
    const url = useRouteMatch();

    console.log(`URL ${url}/${card.id}/study`)
    const params = useParams();
    console.log("params: ", params)
    
    return (
        <li key={card.id} className="card" >
            <div className="card-body">
                <div className="d-flex">
                    <div className="d-flex justify-content-between">
                    <p className="card-text text-secondary">{card.front}</p>
                    </div>
                    <p className="card-text">{card.back}</p>
                </div>
                <div className="d-flex flex-row justify-content-end">
                    <div className="d-flex">
                        <EditBtn deckId={deckId} cardId={card.id}/>
                        <DeleteBtn id={card.id} />
                    </div>
                </div>
            </div>
        </li>
        
    );
}