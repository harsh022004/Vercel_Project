import React, { ComponentsBluestar } from 'react'
import '../ComponentsBluestar/Header.css'
import img1 from '../Images/Bluesky.png'
import { NavLink,Link } from 'react-router-dom'

 const Header =() =>
 {
  return (
    <>
      <NavLink to={'/'}  >
        <nav className=" N " >
        <>
          <a className="navbar-brand" href="#">
            <img className='img1'alt="BLuesky" src={img1} />
          </a>
        </>
        <ul>
          <li>
            <a >
            <NavLink to={'/'}>
              Home
              </NavLink>
            </a>
          </li>
          <li>
            <a>
              <NavLink to={'/Menus'}>
              Menu
              </NavLink>
            </a>
          </li>
          <li>
            <a>
            <NavLink to={'/About Us'}>
              About Us
              </NavLink>
            </a>
          </li>
          <li>
            <a>
            <NavLink to={'/Sup'}>
              Sign Up
              </NavLink>
            </a>
          </li>
        </ul>
        </nav>
      </NavLink>
       
    </>
  )
}
export default Header;
