import React from 'react';

import CardComponent from '../card/card.component.jsx';

import Card from '../card/card.jsx';

class HandComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div
        className="hand"
        data-name={this.props.hand.name}
      >
        <span
          className="hand-score"
        >
          {this.props.hand.score}{this.props.gameStatus}
        </span>

        <span 
          className="hand-status"
        >
          {this.props.hand.score > 21 
            && 'Busted'}
          {this.props.hand.name === this.props.winner 
            && 'Win'}
          {this.props.winner
            && this.props.hand.name !== this.props.winner 
            && this.props.hand.score < 21 
            && 'Lose'}
          
        </span>

        {this.props.hand.cards.map((value, key)=>
          <CardComponent key={value.name} card={value} />
        )} 
      </div>
    );

  }
}

export default HandComponent;