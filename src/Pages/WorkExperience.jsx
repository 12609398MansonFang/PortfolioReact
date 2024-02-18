import React from 'react'

import img from '../Assets/Images/experience.jpg'
import data from '../Assets/JSON/Data.json'

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

const WorkExperience = ({Height}) => {
    return (
        <div className='PageContainer' 
            style={PageContainerStyle(Height)}
        >
            <div className='WorkExperienceContainer'
                style={ContentContainerStyle(Height)}
            >
                <h1 className='WorkExperienceTitle flex text-center'
                    style={{fontFamily: 'Serif',
                            fontSize: '45px'}}
                >   
                    Work Experience
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
                    <div className='ContentContainer flex flex-col md:flex-row items-center justify-center md:justify-between'>
                        <div className='space-y-2 md:space-y-4 md:w-1/2 text-center md:text-left'>
                            <div className='Work1 font-serif'>
                                <h2 className='WorkPlace font-bold text-md md:text-lg'>{data.work[0].experience[0].name}</h2>
                                <h3 className='WorkTitle font-bold text-sm md:text-md'>{data.work[0].experience[0].position}</h3>
                                <p className='Description text-xs md:text-sm'>{data.work[0].experience[0].description}</p>
                                <h4 className='Duration font-bold text-sm md:text-md'>{data.work[0].experience[0].duration}</h4>
                            </div>
                            
                            <div className='Work2 font-serif'>
                                <h2 className='WorkPlace font-bold text-md md:text-lg'>{data.work[0].experience[1].name}</h2>
                                <h3 className='WorkTitle font-bold text-sm md:text-md'>{data.work[0].experience[1].position}</h3>
                                <p className='Description text-xs md:text-sm'>{data.work[0].experience[1].description}</p>
                                <h4 className='Duration font-bold text-sm md:text-md'>{data.work[0].experience[1].duration}</h4>
                            </div>
                            
                            <div className='Work3 font-serif'>
                                <h2 className='WorkPlace font-bold text-md md:text-lg'>{data.work[0].experience[2].name}</h2>
                                <h3 className='WorkTitle font-bold text-sm md:text-md'>{data.work[0].experience[2].position}</h3>
                                <p className='Description text-xs md:text-sm'>{data.work[0].experience[2].description}</p>
                                <h4 className='Duration font-bold text-sm md:text-md'>{data.work[0].experience[2].duration}</h4>             
                            </div>
                        </div>
                    
                        <div className='flex items-center justify-center md:w-1/2'>
                                <img src={img} alt='Img' style={{ width: '120%', maxWidth: '240px', height: 'auto' }}></img>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience