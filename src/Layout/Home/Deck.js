import React from "react";
import NavBar from "./NavBar";

export default function Deck({ deck }) {
    return (
        <div>
            <div>
                <NavBar rootName={deck?.name} />
            </div>
        </div>
    );
}