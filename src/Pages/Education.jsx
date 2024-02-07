import React from 'react'

import Data from '../Assets/JSON/Data.json'

import logo from '../Assets/Images/utslogo.png'

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
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
})

const Education = ({Height}) => {
    return (
        <div className='PageContainer' 
            style={PageContainerStyle(Height)}
        >
            <div className='EducationContainer'
                style={ContentContainerStyle(Height)}
            >
                <h1 className='EducationTitle'
                    style={{fontFamily: 'Serif',
                            fontSize: '45px'}}
                >   
                    Education
                </h1>

                <div className='ContentContainer flex flex-col justify-center items-center md:flex-row md:justify-between'>
                    <div className='Contents flex flex-col space-y-2 md:space-y-4 md:text-left md:w-1/2'>
                        <h2 className='Institution font-bold font-serif'>University of Technology, Sydney</h2>
                        <p className='Course font-serif'>Bachelor of Engineering Majoring Mechanical and Mechatronic Engineering with Diploma in Professional Practice</p>
                        <p className='Duration font-bold font-serif'>03/2016 - 09/2022</p>
                    </div>
                    <div className='flex items-center justify-center md:w-1/2'>
                        <img src={logo} alt='Logo' style={{ width: '100%', maxWidth: '220px', height: 'auto' }}></img>
                    </div>
                </div>

                <h1 className='EducationTitle'
                    style={{fontFamily: 'Serif',
                            fontSize: '45px'}}
                >   
                    Skills
                </h1>

                <div className='ContentContainer flex flex-row justify-between space-x-5 md:flex-col md:justify-center md:items-center md:text-center md:space-y-3'>
                    <div>
                        <h2 className='Skill font-bold font-serif'>Transferrable Skill Set</h2>
                        <p className='Skill font-serif'>- Communication</p>
                        <p className='Skill font-serif'>- Teamwork, Leadership and Coaching</p>
                        <p className='Skill font-serif'>- Planning and Organisation</p>
                    </div>
                    
                    <div>
                        <h2 className='Skill font-bold font-serif'>Technical Skill Set</h2>
                        <p className='Skill font-serif'>- Programming Languages (JavaScript,Python and C++)</p>
                        <p className='Skill font-serif'>- Front - End Development (HTML, CSS and React)</p>
                        <p className='Skill font-serif'>- Back - End (Node.JS and Express.JS)</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education