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
    }

  }

  hit(){

    this.state.player.push(this.state.deck.draw())
    this.setState({
      player: this.state.player.slice()
    });

  }

  render() {

    this.state.deck.collectAndShuffle();

    return (
      <div>
        <button onClick={()=>this.hit()}>
          hit me baby!
        </button>
        <HandComponent hand={this.state.player} />
      </div>
    );
  }
}

export default AppComponent;