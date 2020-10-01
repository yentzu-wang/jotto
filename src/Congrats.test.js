import React from "react"
import { shallow } from "enzyme"
import Congrats from "./Congrats"
import { findByTestAttr } from "../test/testUtils"

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
}

test("renders without error", () => {})

test("render no text when `success` prop is false", () => {})

test("render non-empty congrats message when `success` prop is true", () => {})
