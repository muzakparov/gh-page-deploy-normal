import React from "react"
import PropTypes from "prop-types"

const Square = ({ isWinningSquare, onClick, value }) =>(
  <button className={isWinningSquare ? "square win":"square"} onClick={onClick}>
    {value}
  </button>
)

Square.propTypes = {
  isWinningSquare: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  value:PropTypes.string,
}

 
export default Square