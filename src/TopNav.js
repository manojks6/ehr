import React from 'react'
import { Link } from 'react-router-dom'
import "./TopNav.css"
function TopNav() {
  return (
    <div className='topNav'>
       <div className='lef'>
          <Link to="/" id='Logo'> <p >EHR</p></Link>
          <Link to="/Patient"> <p>Patient</p></Link>
          <Link to="/Doctor"> <p>Doctor</p></Link>
      </div>
      <div className='rig'>
          <a href="/Admin"><p>Admin</p></a>
          <a href="/About"><p>About</p></a>
      </div>
    </div>
  )
}
export default TopNav
