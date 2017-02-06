import React from 'react';

import HandComponent from '../hand/hand.component.jsx';
import ControlsComponent from '../controls/controls.component.jsx';
import MastheadComponent from '../masthead/masthead.component.jsx';

import Deck from '../deck/deck.jsx';
import Dealer from '../dealer/dealer.jsx';
import Hand from '../hand/hand.jsx';

class AppComponent extends React.Component {

  constructor(){
    super();
    
    this.state = {
      deck: new Deck(),
      hands: {
        player: new Hand('player'),
        dealer: new Hand('dealer')
      },
      gameStatus: 'new',
      winner: null
    };

    this.dealer = new Dealer();
    this.dealer.setDeck(this.state.deck);
    this.dealer.addPlayer(this.state.hands.player);
    this.dealer.addPlayer(this.state.hands.dealer);

    // Declare the method here so we can keep the scope with () =>, and remove the event listener on unmount
    this.handleKeyPress = (e) => {

      const actions = new Map([
          ['KeyA', () => this.deal()],
          ['KeyS', () => this.hit()],
          ['KeyD', () => this.stand()]
        ]);

      console.log(actions, e.code, actions.has(e.code));

      if(actions.has(e.code)){
        actions.get(e.code).call();

      } 
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }

  render() {

    return (
      <div>

        <MastheadComponent />

        <div
          className="table" 
        >
          <span>State: {this.state.gameStatus}, Winner: {this.state.winner}</span>

          <HandComponent 
            hand={this.state.hands.dealer} 
          />

          <HandComponent 
            hand={this.state.hands.player} 
          />
        </div>

        <ControlsComponent 
          deal={() => this.deal()} 
          hit={() => this.hit()} 
          stand={() => this.stand()} 
          gameStatus={this.state.gameStatus}
        />

      </div>
    );
  }

  componentWillUnmount(){
    document.removeEventListener('keypress', this.handleKeyPress);
  }


  deal(){
    if(this.state.gameStatus !== 'new') return;

    this.dealer.deal();
    this.setGameStatus('deal');
  }

  hit(){
    if(this.state.gameStatus === 'new') return;

    this.dealer.hit('player');

    if(this.state.hands.player.score > 21){
      this.stand();
    }else{
      this.setGameStatus('hit');
    }

  }

  stand(){
    if(this.state.gameStatus === 'new') return;
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