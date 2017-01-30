import React from 'react';

import './card.component.scss';

// Can we use functional component? */
class CardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Suit: {this.props.suit}
        <br/>
        Index: {this.props.index}
      </div>
    );
  }

}

export default CardComponent;