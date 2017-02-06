import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Can we use functional component?
class CardComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        className="card-container"
        transitionName="draw" 
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <img
          data-key={this.props.key}  
          src={`/public/deck/${this.getCardImageName(this.props.card)}.svg`} 
          alt={this.props.name}
          className='card' 
          />
      </ReactCSSTransitionGroup>
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