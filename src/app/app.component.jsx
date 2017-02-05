import React from 'react';

import HandComponent from '../hand/hand.component.jsx';
import ControlsComponent from '../controls/controls.component.jsx';

import Deck from '../deck/deck.jsx';
import Dealer from '../dealer/dealer.jsx';
import Hand from '../hand/hand.jsx';


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
      gameStatus: 'new',
      winner: null
    };

    this.dealer = new Dealer();
    this.dealer.setDeck(this.state.deck);
    this.dealer.addPlayer('player', this.state.hands.player);
    this.dealer.addPlayer('dealer', this.state.hands.dealer);

  }

  render() {

    return (
      <div>
        <span>State: {this.state.gameStatus}, Winner: {this.state.winner}</span>

        <HandComponent 
          hand={this.state.hands.dealer} 
        />

        <HandComponent 
          hand={this.state.hands.player} 
        />

        <ControlsComponent 
          deal={() => this.deal()} 
          hit={() => this.hit()} 
          stand={() => this.stand()} 
          gameStatus={this.state.gameStatus}
        />

      </div>
    );
  }


  deal(){
    this.dealer.deal();
    this.setGameStatus('deal');
  }

  hit(){
    this.dealer.hit('player');

    if(this.state.hands.player.score > 21){
      this.stand();
    }else{
      this.setGameStatus('hit');
    }

  }

  stand(){
    this.dealer.stand();
    this.setGameStatus('stand');
    this.dealer.flip('dealer');
    this.dealer.play('dealer');
    this.state.winner = this.dealer.calculateWinner();
    this.setGameStatus('new');
  }  

  setGameStatus(status){
    this.setState({
      gameStatus: status      
    })
  }

}

export default AppComponent;