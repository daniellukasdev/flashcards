import React, { useEffect } from "react";
import NavBar from "./NavBar";
import DeckForm from "../Decks/DeckForm";
import { readDeck } from "../../utils/api";


export default function CreateEditDeck({ deck, setDeck, isDeck = true, edit = false }) {
    useEffect(() => {
        if (edit) {
            async function loadDeck() {
                const deckFromAPI = await readDeck(deck.id);
                setDeck(deckFromAPI);
            };
            loadDeck();
        }
    }, [deck.id, setDeck, edit])
 
    return (
        <div>
            <div>
                <NavBar 
                rootName={edit ? `${deck.name}` : "Create Deck"} 
                edit={edit}
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
                edit={edit}

                />
            </div>
        </div>
    );
}