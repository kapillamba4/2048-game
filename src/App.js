import React from 'react';
import './App.css';
import GameContainer from './containers/GameContainer';
import AppContext from './AppContext';
function App() {
  return (
    <div className="App">
      <div className="App-header">2048</div>
      <AppContext.Consumer>
        {context => (
          <div>
            <button className="reset-btn btn btn-info" onClick={context.reset}>
              Reset
            </button>
            <div className="nav-btn-set">
              <button
                className="nam-btn btn btn-primary"
                onClick={context.moveUp}
              >
                Up
              </button>
              <button
                className="down-btn btn btn-primary"
                onClick={context.moveDown}
              >
                Down
              </button>
              <button
                className="left-btn btn btn-primary"
                onClick={context.moveLeft}
              >
                Left
              </button>
              <button
                className="right-btn btn btn-primary"
                onClick={context.moveRight}
              >
                Right
              </button>
            </div>
            {context.gameEnd && (
              <div className="App-header">
                Game Ends, No more moves possible
              </div>
            )}
          </div>
        )}
      </AppContext.Consumer>
      <GameContainer />
    </div>
  );
}

export default App;
