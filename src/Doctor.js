import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import "./Doctor.css"
function Doctor() {
  return (
    <div className='Doctor'>
      <div className='top'><TopNav/></div>
      <div className='docBody'>
          <div className='left'><SideNav a="Dashboard" b="View Records" c="Consult"/></div>
          <div className='right'>
            <div className='details'>
              <div className='Photo'>
                <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='img'></img>
              </div>
              <div className='data'>
              <b>Name : </b>Manjunath S <br/>
              <b>Id : </b> 0x5sd2d520d50d2<br/>
              <b>Email : </b>manjunaths@gmail.com<br/>
              <b>Phone : </b>850250101<br/>
              <b>City : </b>Bangalore<br/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Doctor
