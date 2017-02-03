import React from 'react';

import HandComponent from '../hand/hand.component.jsx';

import Hand from '../hand/hand.jsx';
import Deck from '../deck/deck.jsx';

import './app.component.scss';

class AppComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      deck: new Deck(),
      hands: {
        player: new Hand(),
        dealer: new Hand()
      },
      playerScore: 0,
      dealerScore: 0,
      gameStatus: 'new'
    }

  }

  render() {

    this.state.hands.player.updateScore();
    this.state.hands.dealer.updateScore();

    return (
      <div>
        <span>{this.state.gameStatus}</span>
        <h2>
          Dealer <span>{this.state.hands.dealer.score}</span>
        </h2>
        <HandComponent hand={this.state.hands.dealer} />

        <h2>
          Player <span>{this.state.hands.player.score}</span>
        </h2>
        <HandComponent hand={this.state.hands.player} />

        <button 
          onClick={()=>this.deal()} 
          disabled={this.state.gameStatus !== 'new'}
          >
            Deal
        </button>
        <button 
          onClick={()=>this.hit(this.state.player, this.state.deck)}
          disabled={this.state.gameStatus === 'new'}
          >
            Hit
        </button>
        <button 
          onClick={()=>this.stand()} 
          disabled={this.state.gameStatus === 'new'}
          >
            Stand
        </button>

      </div>
    );
  }
  
  deal(){
    this.state.deck.collectAndShuffle();
    this.reset();
    this.hit(this.state.player, this.state.deck, 2, false);
    this.hit(this.state.dealer, this.state.deck, 2, false);
    this.setGameStatus('deal');
  }

  hit(hand, deck, howMany = 1, updateState = true){

    Array(howMany).fill().map(() =>
      hand.push(deck.draw())
    );

    if(updateState) this.setGameStatus('hit');

  }

  stand(){
    this.setGameStatus('stand');
  }

  reset(){
    this.state.dealer = new Array();
    this.state.player = new Array();
  }

  getScore(hand){
    let total = 0;

    Array(hand.length).fill().map((_, i) => 
      total += hand[i].numeric
    );

    return total;
  }

  setGameStatus(status){
    this.setState({
      gameStatus: status      
    })
  }

  calculateWinner(dealerScore, playerScore){

    let status = {
      winner: '',
      reason: ''
    }

    if(playerScore > 21){
      status.winner = 'dealer';
      status.reason = 'player_busted';
    }

    return status;

  }



}

export default AppComponent;