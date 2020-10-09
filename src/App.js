import React, { Component } from "react"
import { connect } from "react-redux"
import GuessWords from "./GuessedWords"
import Congrats from "./Congrats"
import Input from "./Input"
import { getSecretWord } from "./actions"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessWords guessedWords={this.props.guessedWords} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state

  return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, { getSecretWord })(App)
