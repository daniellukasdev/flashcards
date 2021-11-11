import React, { useState } from "react";
import NavBar from "./NavBar";
import DeckForm from "../Decks/DeckForm";


export default function CreateEditDeck({ deck, setDeck, isDeck = true, edit = false }) {
    const [ deckName, setDeckName ] = useState("");
    const [ description, setDescription ] = useState("");
 
    return (
        <div>
            <div>
                <NavBar 
                rootName={edit ? "Edit Deck" : "Create Deck"} 
                deck={deck} 
                setDeck={setDeck} 
                isDeck={isDeck} 
                />
            </div>
            <div>
                <h1>{edit ? "Edit Deck" : "Create Deck"}</h1>
            </div>
            <div>
                <DeckForm 
                deck={deck} 
                deckName={deckName} 
                setDeckName={setDeckName}
                description={description}
                setDescription={setDescription} 
                edit={edit}

                />
            </div>
        </div>
    );
}