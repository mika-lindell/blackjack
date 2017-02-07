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
          className="hand-name"
        >
          {this.props.hand.name}
        </span>
        <span
          className="hand-score"
        >
          {this.props.hand.viewScore}
        </span>
        {this.props.hand.name === this.props.winner &&
          <span 
            className="hand-status"
          >
            Win
          </span>
        }
        {this.props.hand.score > 21 && 
          <span 
            className="hand-busted"
          >
            Busted
          </span>
        }
        {this.props.hand.cards.map((value, key)=>
          <CardComponent key={value.name} card={value} />
        )} 

      </div>
    );

  }
}

export default HandComponent;