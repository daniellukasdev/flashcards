import React from "react";
import { useHistory } from "react-router-dom";
import deleteDeckHandler from "../Decks/deleteDeckHandler";

export default function DeleteBtn({ deckId }) {
    const history = useHistory();
    return (
        <button onClick={(event) => {
            event.preventDefault();
            deleteDeckHandler(deckId);
            history.go(0);
            }} className="btn btn-danger">
            <span className="oi oi-trash"></span>
        </button>
    );
}