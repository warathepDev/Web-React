import React from 'react'
import { IoLogoGithub, IoMailOutline, IoPhonePortraitOutline} from "react-icons/io5";
import './Contact.css'

function Contact() {
  return (

    <div className="contact"  id='contact'>
        <div className="container-con">
            <div className="head-name"> 
                    <h1>Contact</h1>
            </div>
            <div className="contact-con">
                <div className="col-md-4">
                    <div className="con-link github">
                        <IoLogoGithub/>
                        <p>Github</p>
                        <a href='https://github.com/warathepDev'>Profile Github</a>
                    </div>
                    <div className="con-link phone-number">
                        <IoPhonePortraitOutline/>
                        
                        <p>Telephone number </p>
                        <a href="tel:0980891131">Tel : 0980891131</a>
                    </div>
                    <div className="con-link e-mail">
                        <IoMailOutline />
                        <p>E-mail</p>
                        <a href="mailto:basvaratap@gmail.com" >basvaratap@gmail.com</a>
                        <a href="mailto:warathepk61@nu.ac.th" >warathepk61@nu.ac.th</a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contact