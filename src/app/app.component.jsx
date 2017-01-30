import React from 'react';
import {render} from 'react-dom';

import HandComponent from '../hand/hand.component.jsx';

import Deck from '../deck/deck.jsx';
import Hand from '../hand/hand.jsx';

import './app.component.scss';

class AppComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      deck: new Deck(),
      hands: {
        player: new Hand(),
        dealer: new Hand(),
      }
    }

  }

  drawFrom(deck, toHand){
    toHand.hit(deck.draw());
  }

  renderHand(hand){
    return (
      <HandComponent hand={hand} />
    );
  }

  render() {

    this.state.deck.collectAndShuffle();

    this.drawFrom(this.state.deck, this.state.hands.player);
    this.drawFrom(this.state.deck, this.state.hands.player);
    this.drawFrom(this.state.deck, this.state.hands.player);

    return (
      <div>
        {this.renderHand(this.state.hands.player)}
      </div>
    );
  }
}

export default AppComponent;