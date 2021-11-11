import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import NavBar from "./NavBar";
import EditBtn from "../Buttons/EditBtn";
import StudyBtn from "../Buttons/StudyBtn";
import AddCardsBtn from "../Buttons/AddCardsBtn";
import DeleteBtn from "../Buttons/DeleteBtn";
import CardsList from "../Cards/CardsList";

export default function Deck({ deck, setDeck, isDeck, setIsDeck }) {
    const { deckId } = useParams();
    let cards = [];

    useEffect(() => {
        async function loadDeck() {
            const deckFromAPI = await readDeck(deckId);
            setDeck(deckFromAPI);
        };
        loadDeck();
    }, [deckId, setDeck])

    if (deck?.cards?.length > 0) {
        cards = [
            <div>
                    <h3>Cards</h3>
            </div>,
            <div>
                <CardsList deckId={deckId} cards={deck.cards}/>
            </div>,
        ]
    }

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
                        <EditBtn deckId={deck.id}/>
                        <StudyBtn deckId={deckId}/>
                        <AddCardsBtn deckId={deck.id} />
                    </div>
                    <div className="d-flex">
                        <DeleteBtn id={deck.id} isDeck={true} deckView={true} />
                    </div>
                </div>
            </div>
            <div>
                {cards}
            </div>
        </div>
    );
}