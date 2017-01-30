import React from 'react';
import {render} from 'react-dom';

import Card from '../card/card.type.jsx';
import CardComponent from '../card/card.component.jsx';


import './app.component.scss';

class AppComponent extends React.Component {

  constructor(){
    super();
    this.state = {
      deck: null,
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
    const foo = new Card('hearts', 1);
    return (
      <div>
        {this.renderCard(foo)}      
      </div>
    );
  }
}

export default AppComponent;