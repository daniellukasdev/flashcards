import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import { createDeck, readDeck } from "../../utils/api";

export default function CreateDeck({ decks, deck, setDeck }) {
    const [ deckName, setDeckName ] = useState("");
    const [ description, setDescription ] = useState("");

    const history = useHistory();

    function handleCancelBtn() {
        history.push("/");
    }

    const handleInputChange = (event) => setDeckName(event.target.value);
    const handleTextAreaChange = (event) => setDescription(event.target.value);
    async function handleSubmit(event) {
        event.preventDefault();
        console.log("before: ", deckName, description);
        
        const newDeck = {
            id: (decks?.length + 1),
            name: deckName,
            description: description,
        }
        const addToDecks = await createDeck(newDeck);
        console.log("addToDecks :", addToDecks)
        // setDeckName("");
        // setDescription("");
        history.push(`/decks/${newDeck.id}`);
        console.log("after:", deckName, description, newDeck.id);
        
    }
    return (
        <div>
            <div>
                <NavBar rootName={"Create Deck"} />
            </div>
            <div>
                <h1>Create Deck</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="deckName">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="deckName" 
                            name="deckName"
                            value={deckName}
                            onChange={handleInputChange}
                            placeholder="Deck Name">
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea 
                            className="form-control" 
                            id="description" 
                            rows="4"
                            name="description"
                            value={description}
                            onChange={handleTextAreaChange}
                            placeholder="Brief description of the deck">
                        </textarea>
                    </div>
                    <div>
                        <button onClick={(event) => {
                            event.preventDefault();
                            handleCancelBtn();
                        }}className="btn btn-secondary mr-1">Cancel</button>
                        <button type="submit" className="btn btn-primary ml-1">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}