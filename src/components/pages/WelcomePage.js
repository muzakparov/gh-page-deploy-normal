import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"

import { isStartX } from "../../actions"
import { setXIsNext } from "../../actions"


const WelcomePage = ({ onSetStartX }) => {
  return (
    <div>
      <div>WelcomePage</div>
      <div>
        <span className="square">
          <NavLink
            to="/game"
            onClick={() => onSetStartX(0)}
          >
            X
          </NavLink>
        </span>
        <span className="square">
          <NavLink
            to="/game"
            onClick={() => onSetStartX(1)}
          >
            O
          </NavLink>
        </span>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSetStartX: startX => {
      dispatch(isStartX(startX))
      dispatch(setXIsNext(0, startX))
    },
  }
}

const WelcomePageContainer = connect(
  null,
  mapDispatchToProps
)(WelcomePage)


export default WelcomePageContainer