import React, { useState } from "react";
import CardItem from "./CardItem";

export default function CardsList({ cards = [] }) {
    const listItems = cards.map((card) => <CardItem card={card} />);

    return (
        <ul className="list-unstyled">
            {listItems}
        </ul>
    );
};