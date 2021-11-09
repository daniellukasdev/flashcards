import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar";

export default function CreateDeck() {
    const history = useHistory();
    function handleCancelBtn() {
        history.push("/");
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
                <form>
                    <div className="form-group">
                        <label for="deckName">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="deckName" 
                            name="deckName"
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