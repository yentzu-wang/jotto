import React, { Component } from "react"
import { connect } from "react-redux"
import GuessWords from "./GuessedWords"
import Congrats from "./Congrats"
import Input from "./Input"
import { getSecretWord } from "./actions"

import "./App.css"

export class UnconnectedApp extends Component {
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord()
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
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

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp)
