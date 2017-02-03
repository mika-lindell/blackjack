import React from 'react';

import CardComponent from '../card/card.component.jsx';

import Card from '../card/card.jsx';


class HandComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
      {this.props.hand.cards.map((value, i)=>
        <CardComponent key={i} card={value} />
      )} 
      </div>
    );

  }
}

export default HandComponent;