import React from 'react'

function Greeting({ props }) {
    console.log(props)
  return (
      <div>{ props  }</div>
  )
}

export default Greeting