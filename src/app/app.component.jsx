import React from 'react';

import HandComponent from '../hand/hand.component.jsx';

import Deck from '../deck/deck.jsx';

import './app.component.scss';

class AppComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      deck: new Deck(),
      player: new Array(),
      dealer: new Array(),
      playerScore: 0,
      dealerScore: 0
    }

  }

  deal(){
    this.state.deck.collectAndShuffle();
    this.reset();
    this.hit('player', 2);
    this.hit('dealer', 2);
  }

  hit(hand = 'player', howMany = 1){

    if (this.state.deck.length === 0) return;

    Array(howMany).fill().map(() =>
      this.state[hand].push(this.state.deck.draw())
    );

    let state = {};
    state[hand] = this.state[hand].slice();
    this.setState(state);

  }

  reset(){

    this.state.dealer = new Array();
    this.state.player = new Array();

  }

  getScore(hand = 'player'){
    let total = 0;

    Array(this.state[hand].length).fill().map((_, i) => 
      total += this.state[hand][i].numeric
    );

    return total;
  }

  render() {

    this.state.playerScore = this.getScore('player');
    this.state.dealerScore = this.getScore('dealer');

    return (
      <div>
        <HandComponent hand={this.state.player} />
        <button onClick={()=>this.deal()}>
          Deal
        </button>
        <button onClick={()=>this.hit()}>
          Hit
        </button>
        <span>{this.state.playerScore}</span>
      </div>
    );
  }
}

export default AppComponent;