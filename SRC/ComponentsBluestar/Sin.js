import React from 'react'
import'../ComponentsBluestar/Sup.css'
import { Link } from 'react-router-dom'
export default function () {
  return (
  <div className='S'>
   <div className="wrapper">
        <h2>Sign In</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Enter password" required />
          </div>
          <div className="input-box button">
            <input type="Submit" defaultValue="LogIN" />
          </div>
          <div className="text">
            <h3> do not have an account? <Link to='/Sup'>Sign Up
            </Link> </h3>
          </div>
        </form>
      </div>
  </div>
  )
}
