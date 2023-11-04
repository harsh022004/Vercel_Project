import React from 'react'
import food from '../Images/food.mp4'
import { Link } from 'react-router-dom'
import '../ComponentsBluestar/Home.css'
export default function Home() {
  return (
    <>

<div className='Vi'>
<video autoPlay loop muted className='videos' >
  <source src={food} type='video/mp4' />
</video>
</div>
<div className="colorover" >
<div className="menu2">
  <div className='menu3'>
    <p>
      
        <b>
          WECOME TO BLUESKY
        </b>
      
    </p>
  </div>
  <p>

    <i>
      <b>
        "I know once people get connected to real food, they never change
        back"
      </b>
    </i>
  </p>
  <>
<div className='b'>
<button type='button' className='B'> <Link to={'/Menus'}>Explore</Link></button>
  </div>
</>
</div>
</div>
</>
  )
}

