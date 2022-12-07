
import React from 'react'
import './Portfolio.css'
import profile from '../assets/profileImg.png'
import school from '../assets/logoSchool-removebg-preview.png'
import univer from '../assets/NUlogo.png'


function Portfolio() {
  return (

    <div className="port" id='portfolio'>
      <div className='container-p'>
        <div className="head-name" >
            <h1>Portfolio</h1>
        </div>
          <div className="port-con">
              <div className="profile">
                  <div className="pro">
                      <div className="proImg">
                          <img src={profile} alt="" />
                      </div>
                      <div className="detail">
                          <h3>Warathp Kenjamroon</h3>
                          <p>Font-end & Web developer</p>
                      </div>
                      <div className="sub-pro">
                          <div className="topic">
                              <p>City : </p>
                              <p>Age : </p>
                          </div>
                          <div className="value">
                              <p>Phitsanulok</p>
                              <p>22</p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="tech">
                      <div className="skills">
                            <p>HTML</p>
                            <p>CSSS/SCSS</p>
                            <p>Javascript</p>
                            <p>Bootstrap</p>
                            <p>React.JS</p>
                            <p>PHP</p>
                            <p>Python</p>
                            <p>SQl</p>
                      </div>
                      <div className="technicals">
                              <p>Figma</p>
                              <p>VScode</p>
                              <p>Postman</p>
                              <p>Docker</p>
                              <p>Github</p>
                              <p>ngrok</p>
                              <p>MySQl</p>
                              <p>YOLOV.5</p>
                      </div>
                  </div>
              </div>
              <div className="profile-details">
                <div className="descript">
                  <p>I graduated Bachelor of Science (Computer Science) Naresuan University,
                     I'm interesting in front-end and web development, I'm beginning to learn React.js and Node.js .
                  </p>
                </div>
                <div className="ed-ex">
                    <div className="education">
                          <h1>Education</h1>
                          <div className="school">
                            <p style={{ color: "#fff", fontWeight:"bold" }}>2012 - 2017</p>
                            <p>Sapphawithayakom School</p>
                            <p>Mathematic - Science</p>
                            <div className="logo-ed">
                                <img src={ school } alt="" />
                            </div>
                            {/* <br/> */}
                          </div>
                          <div className="university">
                            <p style={{ color: "#fff", fontWeight:"bold" }}>2018 - 2022</p>
                            <p>Naresuan University</p>
                            <p>Bachelor of Science (Computer Science)</p>
                            <div className="logo-ed">
                                <img src={ univer } alt="" />
                            </div>
                          </div>
                          
                      </div>
                      <div className="experience-p">
                        <h1>Experience</h1>
                        <div className="project-name">
                            <p style={{ color: "#fff", fontWeight:"bold" }}>Line Chat Bot REG. NU</p>
                            <p>Python, PHP, CSS, Javascript</p>
                            <p>Line bot SDK</p>
                            <p>Docker LEMP-Stack</p>
                            {/* <a href="#" style={{ marginTop:'0'}} >see more {'>'}</a> */}
                        </div>
                        <div className="project-name">
                            <p style={{ color: "#fff", fontWeight:"bold" }}>Detection and Classification Car in Bus Stop by CCTV using Deep learning</p>
                            <p>Python</p>
                            <p>YOLOV.5</p>
                            <p>OpenCV.2</p>
                            {/* <a href="#" style={{ marginTop:'0'}} >see more {'>'}</a> */}
                        </div>
                        <div className="project-name" style={{ marginBottom : "0"}}>
                            <p style={{ color: "#fff", fontWeight:"bold" }}>WarathepDev. Web site</p>
                            <p>React.JS </p>
                            <p>CSS</p>
                            {/* <a href="#" >see more {'>'} </a> */}
                        </div>
                    </div>
                </div>
                  
              </div>
              <div className='circle3'></div>
          </div>
      </div>
    </div>
  )
}

export default Portfolio