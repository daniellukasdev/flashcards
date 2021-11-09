import React, { useEffect } from "react";
import { useParams } from "react-router";
import Nav from "./Nav";
import { readDeck } from "../../utils/api";

export default function Study() {
    const { deckId } = useParams();
    console.log("params deckId: ", deckId)
    // useEffect(() => {
    //     //const de
    // })
    
    return (
        <div>
            <Nav deckId={deckId}/>
            <p>This is study</p>
        </div>
    );
}