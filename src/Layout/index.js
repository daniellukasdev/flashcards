import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import Study from "./Home/Study";
import CreateEditDeck from "./Home/CreateEditDeck";
import Deck from "./Home/Deck";
import AddEditCard from "./Home/AddEditCard";


function Layout() {
  // create state for decks
  const [ decks, setDecks ] = useState([]);
  const [ deck, setDeck ] = useState([])

  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/new">
            <CreateEditDeck deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId/edit">
            <CreateEditDeck deck={deck} setDeck={setDeck} edit={true} />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <AddEditCard deckId={deck.id} deck={deck} setDeck={setDeck} edit={true} />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddEditCard deckId={deck.id} deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId">
            <Deck deck={deck} setDeck={setDeck} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
