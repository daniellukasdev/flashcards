import React from "react";
import { useHistory } from "react-router-dom";
import deleteHandler from "../Decks/deleteHandler";

export default function DeleteBtn({ id, isDeck = false }) {
    /* creates a button that initiates delete card or deck 
    depending on if it was pressed inside of deck item */
    const history = useHistory();
    return (
        <button onClick={(event) => {
            event.preventDefault();
            deleteHandler(id, isDeck);
            if (isDeck) history.push("/");
            history.go(0);
            }} className="btn btn-danger">
            <span className="oi oi-trash"></span>
        </button>
    );
}