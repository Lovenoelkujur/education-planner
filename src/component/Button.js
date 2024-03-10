import React from 'react'
import "./Button.css"

export const Button = (props) => {
  return (
    
    <div>
        <button
          onClick={props.onClickProps}
          style={{
            backgroundColor: props.bgColor,
            color: props.textColor
          }}
          className="btn">{props.children}
        </button>
    </div>
  )
}
