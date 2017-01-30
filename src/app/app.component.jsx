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
  }

  renderCard(card){
    return(
        <CardComponent suit={card.suit} index={card.index} />
      );
  }

  render() {

    this.state.deck.collectAndShuffle();

    const card = this.state.deck.draw();
    return (
      <div>
        {this.renderCard(card)}      
      </div>
    );
  }
}

export default AppComponent;