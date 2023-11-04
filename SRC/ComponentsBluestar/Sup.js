import React from 'react'
import'../ComponentsBluestar/Sup.css'
import { Link } from 'react-router-dom'
export default function 
() {
  return (
  <div className='S'>
   <div className="wrapper">
        <h2>Sign Up</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm password" required />
          </div>
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms &amp; condition</h3>
          </div>
          <div className="input-box button">
            <input type="Submit" defaultValue="Register Now" />
          </div>
          <div className="text">
            <h3>Already have an account? <Link to='/Sin'>Login now</Link></h3>
          </div>
        </form>
      </div>
  </div>
  )
}
