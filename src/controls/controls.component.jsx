import React from 'react';

import './controls.component.scss';

class ControlsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div 
        className="controls"
      >
        <button 
          onClick={() => this.props.deal()} 
          disabled={this.props.gameStatus !== 'new'}
          >
            Deal
        </button>
        <button 
          onClick={() => this.props.hit()}
          disabled={this.props.gameStatus === 'new'}
          >
            Hit
        </button>
        <button 
          onClick={() => this.props.stand()} 
          disabled={this.props.gameStatus === 'new'}
          >
            Stand
        </button>        
      </div>
    );
  }

}

export default ControlsComponent;


