import React from 'react'
import "./Admin.css"
import TopNav from './TopNav'
import SideNav from './SideNav'
function Admin() {
  return (
    <div className='admin'>
      <div className='Admintop'><TopNav/></div>
      <div className='AdminBody'>
          <div className='Adminleft'><SideNav a="Dashboard" b="Doctors" c="Appointments"/></div>
          <div className='Adminright'>

               
          </div>
      </div>
    </div>
  )
}

export default Admin
