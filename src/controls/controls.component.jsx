import React from 'react';

class ControlsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer 
        className="controls"
      >
        <div
          className="controls-container"
        >
          <button 
            onClick={() => this.props.deal()} 
            disabled={this.props.gameStatus !== 'new'}
            >
              Deal <span
                className="shortcut-key"
              >
              (A)
              </span>
          </button>
          <button 
            onClick={() => this.props.hit()}
            disabled={this.props.gameStatus === 'new'
                      || this.props.gameStatus === 'stand'}
            >
              Hit <span
                className="shortcut-key"
              >
              (S)
              </span>
          </button>
          <button 
            onClick={() => this.props.stand()} 
            disabled={this.props.gameStatus === 'new'
                      || this.props.gameStatus === 'stand'}
            >
              Stand <span
                className="shortcut-key"
              >
              (D)
              </span>
          </button>
        </div>        
      </footer>
    );
  }

}

export default ControlsComponent;


