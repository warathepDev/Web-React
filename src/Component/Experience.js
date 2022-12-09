import React from 'react'
import './Experience.css'

import richMenu from '../assets/richmenu-last.jpg'
import timeTable from '../assets/timetable.mp4'
import timeExam from '../assets/timeexam.jpg'
import gradeResult from '../assets/grades.jpg'

import demo1 from '../assets/demo1.png'
import demo2 from '../assets/demo2.png'


function Experience() {
  return (
    
    <div className="experience" id='experience'>
        <div className="container-ex">
            <div className="head-name"> 
                <h1>Experience</h1>
            </div>
            <div className="ex-con">
                    <div className="ex-description">
                        <div className="line-bot">
                            <h3>Line Chat Bot REG. NU</h3>
                            <p> &nbsp;&nbsp;&nbsp; Line chat bot for registration Naresuan University to answer students who have questions  about registration and processing, 
                                Line chat bot able to browse class schedules, exam schedules and their own grades.
                            </p>
                           <div className="tech">
                                <div className="using-line">
                                    <p>API using </p>
                                    <p>LIFF login page using</p>
                                    <p>Database using</p>
                                    <p>Run service using</p>
                                    <p>API tester</p>
                                    
                                </div>
                                <div className="use-line">
                                    <p>Python</p>
                                    <p>PHP, CSS, Javascript</p>
                                    <p>Mysql</p>
                                    <p>Docker-compose</p>
                                    <p>Postman</p>
                                </div>
                           </div>
                            
                        </div>
                        <div className="machine-learning">
                            <h3>Detection and Classification Car in Bus Stop by CCTV using Deep learning.</h3>
                            <p>Machine learning model to detect vehicles parking in bus stop if have 
                                a vehicle parking in frame model will detect, count, crop frame that vehicle and save a picture.
                            </p>
                            <div className="tech">
                                <div className="using-machine">
                                    <p>Model</p>
                                    <p>Language </p>
                                    <p>Technique </p>
                                    
                                </div>
                                <div className="use-machine">
                                    <p>YOLOV.5</p>
                                    <p>Python</p>
                                    <p>OpenCV.2</p>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div className="ex-demo">
                        <div className="line-demo">
                                <div className="line-img">

                                    <div className='demo'>
                                        <img src={richMenu} alt="richmenu" />
                                        <p>Rich Menu</p>

                                    </div>
                                    <div className='demo'>
                                        <video src={timeTable} autoPlay loop muted></video>
                                        <p>Class Schedule</p>

                                    </div>
                                    <div className='demo'>
                                        <img src={timeExam} alt="" />
                                        <p>Exam Schedule</p>

                                    </div>
                                    <div className='demo' style={{ marginRight: "0"}}>
                                        <img src={gradeResult} alt="" />
                                        <p>Grades</p>

                                    </div>
                                </div>
                        </div>
                        <div className="machine-demo">
                                <div className="machine-img">
                                    <div className="demo">
                                        <img src={ demo1 } alt="" />
                                        <p> detact and count</p>
                                    </div>
                                    <div className="demo" style={{ margin: 0}}>
                                        <img src={ demo2 } alt="" />
                                        <p>crop a video and save a picture</p>
                                    </div>
                                </div>
                        </div>

                    </div>
            </div>
        </div>
        
    </div>

  )
}

export default Experience