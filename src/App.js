import React from "react";
import "./App.css";
import RollDice from "./RollDice";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='board'>
          <RollDice face='one' />
        </div>
      </div>
    );
  }
}

export default App;
