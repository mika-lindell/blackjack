import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
      gameStatus: 'new',
      winner: null
    };
  }

  componentWillMount(){

    this.props.dealer.setDeck(this.props.deck);
    this.props.preload.push.apply( this.props.preload, this.props.deck.getCardImagePaths());
    this.props.dealer.addPlayer(this.props.hands.player);
    this.props.dealer.addPlayer(this.props.hands.dealer);
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
        images={this.props.preload}
        resolveOnError={true}
        mountChildren={true}
        >
          <ReactCSSTransitionGroup
            component="div"
            transitionName="app" 
            transitionAppear={true}
            transitionAppearTimeout={300}
            transitionEnter={false}
            transitionLeave={false}
          >
          <main>

            <MastheadComponent />

            <div
              className="table" 
            >
              <HandComponent 
                hand={this.props.hands.dealer} 
                winner={this.state.winner}
              />

              <HandComponent 
                hand={this.props.hands.player} 
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
          </ReactCSSTransitionGroup>
      </Preload>
    );
  }

  componentWillUnmount(){
    document.removeEventListener('keypress', this.handleKeyPress);
  }

  deal(){
    if(this.state.gameStatus !== 'new') return;

    this.state.winner = null;
    this.props.dealer.deal();
    this.setGameStatus('deal');

    if(this.props.hands.player.score == 21) this.stand(true);
  }

  hit(){
    if(this.state.gameStatus === 'new' || this.state.gameStatus === 'stand') return;

    this.props.dealer.hit('player');

    if(this.props.hands.player.score > 21 
      || this.props.hands.player.score == 21 ){
      this.stand();
    }else{
      this.setGameStatus('hit');
    }
  }

  stand(force = false){

    const flipDelay = 600;
    const dealDelay = 600;

    if(this.state.gameStatus === 'new' || this.state.gameStatus === 'stand' && !force) return;

    this.props.dealer.stand();
    this.setGameStatus('stand');

    // Need a bit of delay for player to catch what's happening
    setTimeout(()=>{

      this.props.dealer.flip('dealer');
      this.props.hands.dealer.calculateScore();
      this.setGameStatus('stand');

      setTimeout(()=>{

        const between = ()=> {
          this.setGameStatus('stand');
        }

        const completed = ()=> {
          this.state.winner = this.props.dealer.calculateWinner();  
          this.setGameStatus('new');    
        }

        this.props.dealer.play('dealer', ()=> between(), ()=> completed());

      }, dealDelay);  
    }, flipDelay);
  }  

  setGameStatus(status){
    this.setState({
      gameStatus: status      
    })
  }
}

AppComponent.defaultProps = {
  deck: new Deck(),
  hands: {
    player: new Hand('player'),
    dealer: new Hand('dealer')
  },
  dealer: new Dealer(),
  preload: new Array()
};

export default AppComponent;