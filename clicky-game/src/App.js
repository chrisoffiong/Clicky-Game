import React, { Component } from 'react';

import Jumbotron from "./components/Jumbotron"
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false"
  };
  clickPicture = id => {
    // Arrange the pictures in a random manner
    const shuffledArray = this.shuffleArray(cards);
    this.setState({cards: shuffledArray});
    // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of if block
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "WRONG. From the TOP", shakeit: "true"});
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "Another One",
        shakeit: "false"
      });
    }
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
  }
  shuffleArray = (picturesArray) => {
      for (let i = picturesArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
      }
      return picturesArray;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
          <Jumbotron></Jumbotron>
        <div className="center-align">
        <h3 className="App-intro">
          
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
        </div>
        <Wrapper
        shakeWrapper = {this.state.shakeit}
        pictures=
          {this.state.cards.map(picture => (
            <Cards
              clickPicture={this.clickPicture}
              id={picture.id}
              key={picture.id} 
              name={picture.name}
              image={picture.image}
            />
          ))}
        />
        <footer className="footer">
      <div className="container">
        <span className="text-muted">&copy; Clicky Game - React app.</span>
      </div>
    </footer> 
      </div>
    );
  }
}
export default App;