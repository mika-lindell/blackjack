import React from 'react';

import './card.component.scss';

// Can we use functional component? */
class CardComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img 
        src={`/public/deck/${this.props.svg}.svg`} 
        alt={this.props.svg} 
        />
    );
  }

}

export default CardComponent;
//{`/public/images/cards.svg#${this.props.svg}`} 