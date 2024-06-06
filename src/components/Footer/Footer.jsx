import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

export const Footer = () => {
    return (
        <div className="footer" id='footer'>

            <div className="footer-content">

                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, eius.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />


                    </div>


                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-7795694096</li>
                        <li>shubhamsingh333333@gmail.com</li>
                    </ul>

                </div>

            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 - All Rights Reserved</p>

        </div>





    )
}
