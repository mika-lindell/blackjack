import React from 'react';
import Preload from 'react-preload';

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
    this.preload = new Array();


  }

  componentWillMount(){

    this.dealer.setDeck(this.state.deck);
    this.dealer.addPlayer(this.state.hands.player);
    this.dealer.addPlayer(this.state.hands.dealer);

  }

  componentDidMount() {

    // Declare the method here so we can keep the scope with () =>, and remove the event listener on unmount
    this.handleKeyPress = (e) => {

      const actions = new Map([
          ['KeyA', () => this.deal()],
          ['KeyS', () => this.hit()],
          ['KeyD', () => this.stand()]
        ]);

      if(actions.has(e.code)){
        actions.get(e.code).call();

      } 
    }

    document.addEventListener('keypress', this.handleKeyPress);

  }

  render() {

    const loadingIndicator = (
      <p className="loader">
        <span className="logo">
          ( BlackJack )
        </span>
        <br />
        <span className="loader-indicator">
          Loading...
        </span>
      </p>
      )

    return (
      <Preload
        loadingIndicator={loadingIndicator}
        images={this.preload}
        resolveOnError={true}
        mountChildren={true}
        >
          <main>

            <MastheadComponent />

            <div
              className="table" 
            >
              <HandComponent 
                hand={this.state.hands.dealer} 
                winner={this.state.winner}
              />

              <HandComponent 
                hand={this.state.hands.player} 
                winner={this.state.winner}
              />
            </div>

            <ControlsComponent 
              deal={() => this.deal()} 
              hit={() => this.hit()} 
              stand={() => this.stand()} 
              gameStatus={this.state.gameStatus}
            />
            
          </main>
      </Preload>
    );
  }

  componentWillUnmount(){
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  deal(){
    if(this.state.gameStatus !== 'new') return;

    this.state.winner = null;
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

    setTimeout(()=>{

      this.dealer.flip('dealer');

      const between = ()=> {
        this.setGameStatus('new');
      }

      const completed = ()=> {
        this.state.winner = this.dealer.calculateWinner();  
        this.setGameStatus('new');    
      }

      this.dealer.play('dealer', ()=> between(), ()=> completed());

    }, 200);
  }  

  setGameStatus(status){
    this.setState({
      gameStatus: status      
    })
  }
}

export default AppComponent;