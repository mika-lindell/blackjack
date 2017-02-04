import React from 'react';

import './card.component.scss';

// Can we use functional component?
class CardComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img 
        src={`/public/deck/${this.getCardImageName(this.props.card)}.svg`} 
        alt={this.props.name} 
        />
    );
  }

  getCardImageName(card){
    if(card.isUpsideDown)
      return 'back';
    else
      return card.name;
  }

}

export default CardComponent;
//{`/public/images/cards.svg#${this.props.svg}`} 