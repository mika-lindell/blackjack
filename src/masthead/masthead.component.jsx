import React from 'react';

class MastheadComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div 
        className="masthead"
      >
        <div
          className="masthead-container"
        >
          <h1 
            className="logo"
          >
              ( BlackJack )
          </h1>
        </div>        
      </div>
    );
  }

}

export default MastheadComponent;