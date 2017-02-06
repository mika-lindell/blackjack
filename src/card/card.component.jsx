import React from 'react';

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
        className='card' 
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