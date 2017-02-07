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
        transitionName="card" 
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={300}
      >
      { !this.props.card.hidden && 
        <img
          src={this.props.card.image} 
          alt={this.props.card.name} 
          className='card' 
        />
      }
      { this.props.card.hidden &&
        <img
          src="/public/deck/back.svg" 
          alt="Backside of a Playing Card"
          className='card' 
        /> 
      }
      </ReactCSSTransitionGroup>
    );
  }

}

export default CardComponent;