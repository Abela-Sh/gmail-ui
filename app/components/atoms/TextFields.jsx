import React from 'react'

const TextFields = (props) => {
  return (
    <input type="text" placeholder={props.placeholder} className={props.className} />
  )
}

export default TextFields