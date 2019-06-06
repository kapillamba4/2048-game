import React, { Component } from 'react';

const AppContext = React.createContext();
const originalData = [[2, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

export class AppContextProvider extends Component {
  state = {
    data: [[2, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    gameEnd: false
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          data: this.state.data,
          gameEnd: this.state.gameEnd,
          reset: () => {
            this.setState({
              data: originalData
            });
          },
          moveUp: () => {
            let newData = [
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ];
            let cursor = [0, 0, 0, 0];
            for (let i = 0; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (this.state.data[i][j] !== 0) {
                  newData[cursor[j]++][j] = this.state.data[i][j];
                }
              }
            }

            for (let i = 1; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === newData[i - 1][j]) {
                  newData[i - 1][j] *= 2;
                  newData[i][j] = 0;
                }
              }
            }

            const newData2 = [
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ];
            cursor = [0, 0, 0, 0];
            for (let i = 0; i < newData2.length; i++) {
              for (let j = 0; j < newData2[i].length; j++) {
                if (newData[i][j] !== 0) {
                  newData2[cursor[j]++][j] = newData[i][j];
                }
              }
            }

            newData = newData2;
            let emptyCells = [];
            for (let i = 0; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === 0) {
                  emptyCells.push(i * newData.length + j);
                }
              }
            }
            let flag = true;
            for (let i = 0; i < newData.length && flag; i++) {
              for (let j = 0; j < newData[i].length && flag; j++) {
                if (newData[i][j] !== this.state.data[i][j]) {
                  const cellNo =
                    emptyCells[Math.floor(Math.random() * emptyCells.length)];
                  newData[Math.floor(cellNo / newData.length)][
                    cellNo % newData.length
                  ] = 2;
                  flag = false;
                }
              }
            }

            emptyCells = [];
            for (let i = 0; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === 0) {
                  emptyCells.push(i * newData.length + j);
                }
              }
            }

            let cntPossibleMoves = 0;
            for (let i = 0; i < newData.length - 1; i++) {
              for (let j = 0; j < newData.length - 1; j++) {
                if (
                  newData[i][j] === newData[i + 1][j] ||
                  newData[i][j] === newData[i][j + 1]
                ) {
                  ++cntPossibleMoves;
                }
              }
            }
            if (cntPossibleMoves === 0 && emptyCells.length === 0) {
              this.setState({
                data: newData,
                gameEnd: true
              });
            } else {
              this.setState({
                data: newData
              });
            }
          },
          moveDown: () => {
            let newData = [
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ];
            let cursor = [3, 3, 3, 3];
            for (let i = newData.length - 1; i >= 0; i--) {
              for (let j = 0; j < newData[i].length; j++) {
                if (this.state.data[i][j] !== 0) {
                  newData[cursor[j]--][j] = this.state.data[i][j];
                }
              }
            }

            for (let i = newData.length - 1; i > 0; i--) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === newData[i - 1][j]) {
                  newData[i][j] *= 2;
                  newData[i - 1][j] = 0;
                }
              }
            }

            const newData2 = [
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ];
            cursor = [3, 3, 3, 3];
            for (let i = newData.length - 1; i >= 0; i--) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] !== 0) {
                  newData2[cursor[j]--][j] = newData[i][j];
                }
              }
            }

            newData = newData2;
            let emptyCells = [];
            for (let i = 0; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === 0) {
                  emptyCells.push(i * newData.length + j);
                }
              }
            }
            let flag = true;
            for (let i = 0; i < newData.length && flag; i++) {
              for (let j = 0; j < newData[i].length && flag; j++) {
                if (newData[i][j] !== this.state.data[i][j]) {
                  const cellNo =
                    emptyCells[Math.floor(Math.random() * emptyCells.length)];
                  newData[Math.floor(cellNo / newData.length)][
                    cellNo % newData.length
                  ] = 2;
                  flag = false;
                }
              }
            }

            emptyCells = [];
            for (let i = 0; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === 0) {
                  emptyCells.push(i * newData.length + j);
                }
              }
            }

            let cntPossibleMoves = 0;
            for (let i = 0; i < newData.length - 1; i++) {
              for (let j = 0; j < newData.length - 1; j++) {
                if (
                  newData[i][j] === newData[i + 1][j] ||
                  newData[i][j] === newData[i][j + 1]
                ) {
                  ++cntPossibleMoves;
                }
              }
            }
            if (cntPossibleMoves === 0 && emptyCells.length === 0) {
              this.setState({
                data: newData,
                gameEnd: true
              });
            } else {
              this.setState({
                data: newData
              });
            }
          },
          moveRight: () => {
            let newData = [
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ];
            let cursor = [3, 3, 3, 3];
            for (let i = newData[0].length - 1; i >= 0; i--) {
              for (let j = 0; j < newData.length; j++) {
                if (this.state.data[j][i] !== 0) {
                  newData[j][cursor[j]--] = this.state.data[j][i];
                }
              }
            }

            for (let i = newData[0].length - 1; i > 0; i--) {
              for (let j = 0; j < newData.length; j++) {
                if (newData[j][i] === newData[j][i - 1]) {
                  newData[j][i] *= 2;
                  newData[j][i - 1] = 0;
                }
              }
            }

            const newData2 = [
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ];
            cursor = [3, 3, 3, 3];
            for (let i = newData[0].length - 1; i >= 0; i--) {
              for (let j = 0; j < newData.length; j++) {
                if (newData[j][i] !== 0) {
                  newData2[j][cursor[j]--] = newData[j][i];
                }
              }
            }

            newData = newData2;
            let emptyCells = [];
            for (let i = 0; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === 0) {
                  emptyCells.push(i * newData.length + j);
                }
              }
            }
            let flag = true;
            for (let i = 0; i < newData.length && flag; i++) {
              for (let j = 0; j < newData[i].length && flag; j++) {
                if (newData[i][j] !== this.state.data[i][j]) {
                  const cellNo =
                    emptyCells[Math.floor(Math.random() * emptyCells.length)];
                  newData[Math.floor(cellNo / newData.length)][
                    cellNo % newData.length
                  ] = 2;
                  flag = false;
                }
              }
            }

            emptyCells = [];
            for (let i = 0; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === 0) {
                  emptyCells.push(i * newData.length + j);
                }
              }
            }

            let cntPossibleMoves = 0;
            for (let i = 0; i < newData.length - 1; i++) {
              for (let j = 0; j < newData.length - 1; j++) {
                if (
                  newData[i][j] === newData[i + 1][j] ||
                  newData[i][j] === newData[i][j + 1]
                ) {
                  ++cntPossibleMoves;
                }
              }
            }
            if (cntPossibleMoves === 0 && emptyCells.length === 0) {
              this.setState({
                data: newData,
                gameEnd: true
              });
            } else {
              this.setState({
                data: newData
              });
            }
          },
          moveLeft: () => {
            let newData = [
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ];
            let cursor = [0, 0, 0, 0];
            for (let i = 0; i < newData[0].length; i++) {
              for (let j = 0; j < newData.length; j++) {
                if (this.state.data[j][i] !== 0) {
                  newData[j][cursor[j]++] = this.state.data[j][i];
                }
              }
            }

            for (let i = 1; i < newData[0].length; i++) {
              for (let j = 0; j < newData.length; j++) {
                if (newData[j][i] === newData[j][i - 1]) {
                  newData[j][i - 1] *= 2;
                  newData[j][i] = 0;
                }
              }
            }

            const newData2 = [
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ];
            cursor = [0, 0, 0, 0];
            for (let i = 0; i < newData[0].length; i++) {
              for (let j = 0; j < newData.length; j++) {
                if (newData[j][i] !== 0) {
                  newData2[j][cursor[j]++] = newData[j][i];
                }
              }
            }

            newData = newData2;
            let emptyCells = [];
            for (let i = 0; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === 0) {
                  emptyCells.push(i * newData.length + j);
                }
              }
            }
            let flag = true;
            for (let i = 0; i < newData.length && flag; i++) {
              for (let j = 0; j < newData[i].length && flag; j++) {
                if (newData[i][j] !== this.state.data[i][j]) {
                  const cellNo =
                    emptyCells[Math.floor(Math.random() * emptyCells.length)];
                  newData[Math.floor(cellNo / newData.length)][
                    cellNo % newData.length
                  ] = 2;
                  flag = false;
                }
              }
            }

            emptyCells = [];
            for (let i = 0; i < newData.length; i++) {
              for (let j = 0; j < newData[i].length; j++) {
                if (newData[i][j] === 0) {
                  emptyCells.push(i * newData.length + j);
                }
              }
            }

            let cntPossibleMoves = 0;
            for (let i = 0; i < newData.length - 1; i++) {
              for (let j = 0; j < newData.length - 1; j++) {
                if (
                  newData[i][j] === newData[i + 1][j] ||
                  newData[i][j] === newData[i][j + 1]
                ) {
                  ++cntPossibleMoves;
                }
              }
            }
            if (cntPossibleMoves === 0 && emptyCells.length === 0) {
              this.setState({
                data: newData,
                gameEnd: true
              });
            } else {
              this.setState({
                data: newData
              });
            }
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;
