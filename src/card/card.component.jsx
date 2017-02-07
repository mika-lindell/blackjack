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
        transitionEnter={false}
        transitionLeave={false}
      >
      { !this.props.hidden && 
        <img
          src={this.props.card.image} 
          alt={this.props.name}
          className='card' 
        />
      }
      { this.props.hidden &&
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