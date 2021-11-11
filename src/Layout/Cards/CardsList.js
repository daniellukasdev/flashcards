import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CardItem from "./CardItem";

export default function CardsList({ deckId, cards = [] }) {
    const params = useParams();
    console.log("params from cardList: ", params)
    const listItems = cards.map((card) => <CardItem deckId={deckId} card={card} />);

    return (
        <ul className="list-unstyled">
            {listItems}
        </ul>
    );
};