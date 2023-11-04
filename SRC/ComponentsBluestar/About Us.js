import React from 'react'
import '../ComponentsBluestar/about.css'
import img2 from '../Images/happy-waiter-serving-food-group-cheerful-friends-pub.jpg'
import { Link } from 'react-router-dom'

export default function
    () {
    return (
        <>
            <div>
                <div className="section">
                    <div className="conta">
                        <div className="content-section">
                            <div className="tit">
                                <h1 className='H1'>About Us</h1>
                            </div>
                            <div className="content">
                                <h3>We're The Creators At Heart.</h3>
                                <p>
                                    His Is The Best Restaurent Which Is Available In Every Mertocity And
                                    Is The Most Trusted Resto For Its Food Quality. So Come With Your
                                    Family And Have a Good Time In Here And Enjoy Food In Your Favourite
                                    Restaurent i.e Our Bluesky Restaurent.
                                </p>

                            </div>
                            <div className="social">
                                <a href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="">
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </div>
                        <div className="image-section">
                            <>
                                <a className="navbar-brand" href="#">
                                    <img className='img2' alt="BLuesky" src={img2} />
                                </a>
                            </>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="con">
                        <div class="row">
                            <div class="footer-col">
                                <h4>Restaurent</h4>
                                <ul>
                                    <li><a href="#">Our services</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Affiliate program</a></li>
                                </ul>
                            </div>
                            <div class="footer-col">
                                <h4>Get Help</h4>
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Order Status</a></li>
                                </ul>
                            </div>
                            <div class="footer-col">
                                <h4>Online Shop</h4>
                                <ul>
                                    <li><a href="/Menus">Starters</a></li>
                                    <li><a href="/Menus">Main course</a></li>
                                    <li><a href="/Menus">Dessert</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </footer>
                <link
                        rel="stylesheet"
                        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    />
            </div>
        </>
    )
}
