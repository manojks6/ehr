import React from 'react'
import './SideNav.css'
function SideNav(props) {
  return (
    <div className='SideNav'>
      <p>{props.a}</p>
      <p>{props.b}</p>
      <p>{props.c}</p>
    </div>
  )
}

export default SideNav
