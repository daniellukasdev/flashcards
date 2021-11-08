import React, { useState } from "react";
import DeckItem from "./DeckItem";

export default function DecksList({ decks }) {
    const listItems = decks.map((deck) => <DeckItem deck={deck} />);

    return (
        <ul className="list-unstyled">
            {listItems}
        </ul>
    );
};