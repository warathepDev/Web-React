import './Banner.css'

import React, { useState }  from 'react'


function Banner() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);

    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false)
        
    const getMessage = (e) => {
        
        setMessage(e.target.value);
        setShow(false)
    }

    const setAttribute = (e) => {
        
        setShow(true);
        // setTimeout(() => {
        //     this.setState({ Mtext : undefined })    
        // }, 3000);
    }

    return (
        <div className='banner' id='banner'>
            <div className='container-b'>
                <div className='banner-con'>
                        <div className='banner-text'>
                            <h1>
                                Hello!
                            </h1>
                            <p className='desc'> 
                                <span>I'm </span>Warathep Kenjamroon
                                
                            </p>
                            <p className='sub'> 
                                This is my website for practice <span>Web Development</span>
                            </p>

                            <div className="input">
                                <input type="text" placeholder='Say something' onChange={getMessage} />
                                <button type='summit' onClick={setAttribute}>Enter </button>
                            </div>
                        </div>
                        
                </div>
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div  className={ show ? "text-popUp active" : "text-popUp"} >
                    {/* { this.state.Mtext } */}
                    <h1>{message}</h1>
                </div>
            </div>
        </div>

    )
    }


export default Banner