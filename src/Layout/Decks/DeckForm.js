import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";

export default function DeckForm({ deck, edit  }) {
    const [ deckName, setDeckName ] = useState("");
    const [ description, setDescription ] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (edit) {
            setDeckName(deck.name);
            setDescription(deck.description);
        }
    }, [deck.name, deck.description, edit])

    const newDeck = {
        name: deckName,
        description: description,
    };

    const deckUpdate = {
        id: deck.id,
        name: deckName,
        description: description,
    };
    
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
            history.push(`/decks/${response.id}`);
        }
    }

    return (
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
                            placeholder={"Deck Name"}>
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
                            placeholder={"Brief description of the deck"}>
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
    );
}