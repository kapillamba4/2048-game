import React from 'react';
import AppContext from '../AppContext';
import './GameContainer.css';
const GameContainer = () => (
  <AppContext.Consumer>
    {context => (
      <table className="game-container">
        {[0, 1, 2, 3].map(el => (
          <tr>
            {context.data[el].map(cell => (
              <td className="game-cell">{cell === 0 ? ' ' : cell}</td>
            ))}
          </tr>
        ))}
      </table>
    )}
  </AppContext.Consumer>
);

export default GameContainer;
