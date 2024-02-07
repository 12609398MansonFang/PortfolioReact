import React from 'react'
import Resume from '../Assets/Documents/MansonFangResume.pdf';

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

const MyCV = ({Height}) => {
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
                    CV
                </h1>

                <div style={{ width: '100%', height: '100vh' }}>
                    <iframe
                        src={Resume}
                        title="PDF Viewer"
                        style={{ width: '100%', height: '100%' }}
                    ></iframe>
                </div>

            </div>
        </div>
    )
}

export default MyCV