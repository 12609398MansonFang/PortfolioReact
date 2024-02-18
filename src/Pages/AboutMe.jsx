import React from 'react'

import Data from '../Assets/JSON/Data.json'

import Portrait from '../Assets/Images/home.jpeg';
import Resume from '../Assets/Documents/MansonFangResume.pdf';
import LinkedInLogo from '../Assets/Images/LinkedInLogo.png';
import GithubLogo from '../Assets/Images/GithubLogo.png';

const PageContainerStyle = (Height) => 
({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 0.9 * Height
})

const ContentContainerStyle = (Height) => 
({
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center', 
    padding: 35,
    width: '90%', 
    height: 0.85 * Height,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
    background: 'white'
})

const ResumeDownload = () => {
    const download = Resume;

    const link = document.createElement('a')
    link.href = download;
    link.target = '_blank';
    link.download = 'MansonResume.pdf';

    link.click();
}

const Linkedin = () => {
    const link = document.createElement('a')
    link.href = 'https://au.linkedin.com/in/manson-fang-6687a1293'
    link.target = '_blank';
    link.click();
}

const GitHub = () => {
    const link = document.createElement('a')
    link.href = 'https://github.com/12609398MansonFang/PortfolioReact'
    link.target = '_blank';
    link.click();
}

const AboutMe = ({Height}) => {
    return (
        <div className='PageContainer' 
            style={PageContainerStyle(Height)}
        >
            <div className='AboutMeContainer space-y-2'
                style={ContentContainerStyle(Height)}
            >
                <h1 className='AboutMeTitle'
                    style={{fontFamily: 'Serif',
                            fontSize: '45px'}}
                >   
                    About Me
                </h1>

                <div
                    className='ScrollableContent flex items-start'
                    style={{
                            overflowX: 'auto',
                            maxHeight: '120vh',
                            width: '100%',
                            paddingLeft: '15px',
                            paddingRight: '15px',                    
                            }}                  
                >
                    <div className="ContentContainer flex flex-col md:flex-row items-center justify-center md:justify-between">
                        <div className="space-y-4 md:w-1/2 text-center md:text-left">
                            <p className="font-bold font-serif">{Data.home[0].content}</p>
                            <p className="font-serif">{Data.aboutme[0].content}</p>
                            <div className="flex justify-center space-x-6 md:justify-start md:space-x-6 p-2">
                            <button
                                className={`w-12 h-12 p-1 text-sm items-center justify-center flex font-bold text-white bg-black hover:rounded-lg hover:border-slate-300 hover:border-2`}
                                onClick={ResumeDownload}
                            >
                                CV
                            </button>
                            <button className="flex items-center justify-center" onClick={Linkedin}>
                                <img
                                    src={LinkedInLogo}
                                    alt="LinkedIn"
                                    className='w-12 h-12 hover:rounded-lg hover:border-slate-300 hover:border-2'
                                />
                            </button>
                            <button className="flex items-center justify-center" onClick={GitHub}>
                                <img
                                    src={GithubLogo}
                                    alt="Github"
                                    className='w-12 h-12 hover:rounded-lg hover:border-slate-600 hover:border-2'
                                />
                            </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:w-1/2">
                            <img src={Portrait} style={{ width: '100%', maxWidth: '220px', height: 'auto' }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe