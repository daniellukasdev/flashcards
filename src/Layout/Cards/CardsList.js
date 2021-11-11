import React from "react";
import CardItem from "./CardItem";

export default function CardsList({ deckId, cards = [] }) {
    // iterates through the cards using map to create card item for each card
    const listItems = cards.map((card) => <CardItem deckId={deckId} card={card} />);

    // displays an unordered list of CardItems
    return (
        <ul className="list-unstyled">
            {listItems}
        </ul>
    );
};