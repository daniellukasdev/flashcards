import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home/Home";
import Study from "./Home/Study";
import CreateEditDeck from "./Home/CreateEditDeck";
import Deck from "./Home/Deck";
import AddCard from "./Cards/AddCard";


function Layout() {
  // create state for decks
  const [ decks, setDecks ] = useState([]);
  const [ deck, setDeck ] = useState([])
  const params = useParams();
  console.log("params: ", params)

  // useEffect(() => {

  // }, [])

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
            <CreateEditDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Deck deck={deck}/>
          </Route>
          <Route path="/decks/:deckId/study">
            <Study deck={deck} setDeck={setDeck} />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard deckName={deck.name}/>
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
