import React from 'react';

import HandComponent from '../hand/hand.component.jsx';

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
      gameStatus: 'new'
    };

    this.dealer = new Dealer();
    this.dealer.setDeck(this.state.deck);
    this.dealer.addPlayer('player', this.state.hands.player);
    this.dealer.addPlayer('dealer', this.state.hands.dealer);

  }

  render() {

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
          onClick={()=>this.hit()}
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
    this.dealer.deal();
    this.setGameStatus('deal');
  }

  hit(){
    this.dealer.hit('player');
    this.setGameStatus('hit');
  }

  stand(){
    this.dealer.stand();
    this.setGameStatus('stand');
    this.dealer.play('dealer');
    this.setGameStatus('finished');
    this.setGameStatus('new');
  }  

  setGameStatus(status){
    this.setState({
      gameStatus: status      
    })
  }

}

export default AppComponent;