import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Home/NavBar";

export default function AddCard() {
    const { deckId } = useParams();
    console.log("params from AddCard: ", deckId)
    return (
        <div>
            <div>
                <NavBar deckId={deckId}/>
            </div>
            <p>Add a new card here</p>
        </div>
    );
}