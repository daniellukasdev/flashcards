import React from "react";
import CardItem from "./CardItem";

export default function CardsList({ deckId, cards = [] }) {
    const listItems = cards.map((card) => <CardItem deckId={deckId} card={card} />);

    return (
        <ul className="list-unstyled">
            {listItems}
        </ul>
    );
};