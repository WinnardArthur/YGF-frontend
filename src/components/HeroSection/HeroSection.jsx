import { useState, useEffect } from 'react'
import './heroSection.scss';

const HeroSection = ({Title, Message, imgUrl}) => {
    const [welcomeMsg, setWelcomeMsg] = useState(true);
    const location = window.location.pathname;

    useEffect(() => {
        setTimeout(() => {
            setWelcomeMsg(false)
        }, 4000);

    })

    return (
    <div className="heroSection">
        <div className="heroArea">
            <img src={imgUrl} alt="YGF" />
            <div className="heroTexts">
                {location === '/' && welcomeMsg && <h1 className='welcomeMsg center-title'>Welcome to YGF PLATFORM</h1> }
                {
                    !welcomeMsg && Title && Message && 
                    <>
                        <h1>{Title}</h1>
                        <p>{Message}</p>
                    </> 
                }

                {
                    (!Message) && 
                    <>
                        <h1 className='center-title'>{Title}</h1>
                    </>
                }
                
            </div>
        </div>
    </div>
    )
}

export default HeroSection