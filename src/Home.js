import React from 'react'
import "./Home.css"
import TopNav from './TopNav'
function Home() {
  return (
    <div className='Dashboard'>
     <div className='Header'>
     <TopNav/>
     </div>
     <div className='img'>
     <div className='body'>
     We Are Here <br/>For Your Care
     </div>
      </div>
    </div>
  )
}

export default Home
