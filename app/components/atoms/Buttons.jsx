import React from 'react'

const Buttons = (props) => {
  return (
    <button>
      <i className={props.iconName}></i>
        {props.name}
    </button>
  )
}

export default Buttons