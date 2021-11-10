import React from "react";
import { useHistory } from "react-router-dom";
import deleteHandler from "../Decks/deleteHandler";

export default function DeleteBtn({ deckId }) {
    const history = useHistory();
    return (
        <button onClick={(event) => {
            event.preventDefault();
            deleteHandler(deckId, true);
            history.go(0);
            }} className="btn btn-danger">
            <span className="oi oi-trash"></span>
        </button>
    );
}