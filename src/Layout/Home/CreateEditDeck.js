import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import { createDeck, updateDeck } from "../../utils/api";

export default function CreateEditDeck({ deck, setDeck, isDeck = true, edit = false }) {
    const [ deckName, setDeckName ] = useState("");
    const [ description, setDescription ] = useState("");
    const history = useHistory();

    const newDeck = {
        // id: (decks?.length + 1),
        name: deckName,
        description: description,
    }

    const deckUpdate = {
        id: deck.id,
        name: deckName,
        description: description,
    }
    
    function handleCancelBtn() {
        if (edit) history.go(-1);
        history.push("/");
    }

    const handleInputChange = (event) => setDeckName(event.target.value);
    const handleTextAreaChange = (event) => setDescription(event.target.value);

    async function handleSubmit(event) {
        event.preventDefault();
        if(!edit){
            const response = await createDeck(newDeck);
            history.push(`/decks/${response.id}`);
        } else {
            const response = await updateDeck(deckUpdate);
            history.go(-1);
        }

    }
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
                            placeholder={edit ? `${deck.name}` : "Deck Name"}>
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
                            placeholder={edit ? `${deck.description}` : "Brief description of the deck"}>
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