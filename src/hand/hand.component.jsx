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
      {this.props.hand.map((value, i)=>
        <CardComponent key={i} svg={value.svg} />
      )} 
      </div>
    );

  }
}

export default HandComponent;