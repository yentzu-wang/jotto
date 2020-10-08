import { storeFactory } from "../test/testUtils"
import { guessWord } from "./actions"

describe("guessWord action dispatcher", () => {
  const secretWord = "party"
  const unsuccessfulGuess = "train"

  describe("no guessed words", () => {
    let store
    const initialState = { secretWord }

    beforeEach(() => {
      store = storeFactory(initialState)
    })

    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3
          }
        ]
      }
      const newState = store.getState()

      expectedState(newState).toEqual(expectedState)
    })

    test("updates state correctly for successful guess", () => {})
  })

  describe("some guessed words", () => {
    test("updates state correctly for unsuccessful guess", () => {})

    test("updates state correctly for successful guess", () => {})
  })
})
