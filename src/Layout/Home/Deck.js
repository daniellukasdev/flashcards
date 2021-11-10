import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import NavBar from "./NavBar";
import EditBtn from "../Buttons/EditBtn";
import StudyBtn from "../Buttons/StudyBtn";
import AddCardsBtn from "../Buttons/AddCardsBtn";
import DeleteBtn from "../Buttons/DeleteBtn";

export default function Deck({ deck, setDeck, isDeck, setIsDeck }) {
    const { deckId } = useParams();
    
    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
    }, [deckId, setDeck])



    return (
        <div>
            <div>
                <NavBar rootName={deck.name} isDeck={isDeck} setIsDeck={setIsDeck} />
            </div>
            <div>
                <div>
                    <h5>{deck.name}</h5>
                </div>
                <div>
                    <p>{deck.description}</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex">
                        <EditBtn />
                        <StudyBtn />
                        <AddCardsBtn />
                    </div>
                    <div className="d-flex">
                        <DeleteBtn />
                    </div>
                </div>
            </div>
        </div>
    );
}