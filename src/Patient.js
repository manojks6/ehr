import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import "./Patient.css"
function Patient() {
  return (
    <div className='Doctor'>
      <div className='top'><TopNav/></div>
      <div className='patBody'>
          <div className='left'><SideNav a="Dashboard" b="View Records" c="Appointments"/></div>
          <div className='right'>
            <div className='details'>
              <div className='Photo'>
                <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='img'></img>
              </div>
              <div className='data'>
              <b>Name : </b>Madhu Sampreeth R <br/>
              <b>Id : </b> 0x125dfgf50043d<br/>
              <b>Email : </b>madhusampreethr@gmail.com<br/>
              <b>Phone : </b>9521548101<br/>
              <b>City : </b>Mysore<br/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Patient
