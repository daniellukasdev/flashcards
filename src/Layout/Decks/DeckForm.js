import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";

export default function DeckForm({ deck, edit  }) {
    // declares states and setState functions
    const [ deckName, setDeckName ] = useState("");
    const [ description, setDescription ] = useState("");
    const history = useHistory();

    /* if editing, sets the deckName and description states
    to the current deck name and deck descriptiom
    It will update when the name, description, or edit dependencies 
    are updated. */
    useEffect(() => {
        if (edit) {
            setDeckName(deck.name);
            setDescription(deck.description);
        }
    }, [deck.name, deck.description, edit])

    // if creating, creates an object to store the new data from inputs
    const newDeck = {
        name: deckName,
        description: description,
    };

    // if editing, creates an object containg the deck's current information
    const deckUpdate = {
        id: deck.id,
        name: deckName,
        description: description,
    };

    /* handles what happens when pressing cancel
    if editing, sends user back to deck view
    if creating, sends user back to home */
    function handleCancelBtn() {
        if (edit) history.go(-1);
        history.push("/");
    }

    // handlers for when the inputs are changed/updated
    const handleInputChange = (event) => setDeckName(event.target.value);
    const handleTextAreaChange = (event) => setDescription(event.target.value);

    /* when submit is clicked, runs createDeck()
    or updateDeck() functions depending on whether the user
    is editing or creating, then sends them to the deck view
    to see the new/updated deck */
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