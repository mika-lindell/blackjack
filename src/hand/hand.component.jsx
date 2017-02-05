import React from 'react';

import CardComponent from '../card/card.component.jsx';

import Card from '../card/card.jsx';

import './hand.component.scss';

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
        <h2>
          {this.props.hand.name} <span>{this.props.hand.score}</span>
        </h2>
          {this.props.hand.cards.map((value, key)=>
            <CardComponent key={key} card={value} />
          )} 
      </div>
    );

  }
}

export default HandComponent;