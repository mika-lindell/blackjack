import React from 'react';
import {render} from 'react-dom';

import CardComponent from '../card/card.component.jsx';

import Deck from '../deck/deck.jsx';
import Card from '../card/card.jsx';


import './app.component.scss';

class AppComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      deck: new Deck(),
      hands: {
        player: null,
        dealer: null,
      }
    }

    this.state.deck.generate();
    this.state.deck.shuffle()
    console.log(this.state.deck);

  }

  renderCard(card){
    return(
        <CardComponent suit={card.suit} index={card.index} />
      );
  }

  render() {
    const foo = new Card('hearts', 1);
    return (
      <div>
        {this.renderCard(foo)}      
      </div>
    );
  }
}

export default AppComponent;