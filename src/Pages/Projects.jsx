import React from 'react'

import img1 from '../Assets/Images/ProjectImage1.png'
import img2 from '../Assets/Images/ProjectImage2.png'
import img3 from '../Assets/Images/ProjectImage3.png'
import img4 from '../Assets/Images/ProjectImage4.png'

const PageContainerStyle = (Height) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 0.9 * Height,
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
    background: 'white',
    margin: 'auto',
})

const ProjectLink1 = () => {
    const link = document.createElement('a')
    link.href = 'https://mansonfangportfolio.com/'
    link.target = '_blank';
    link.click();
}

const ProjectGitLink1 = () => {
    const link = document.createElement('a')
    link.href = 'https://github.com/12609398MansonFang/PortfolioReact'
    link.target = '_blank';
    link.click();
}

const ProjectLink2 = () => {
    const link = document.createElement('a')
    link.href = 'https://mansonfang3dportfolio.com/'
    link.target = '_blank';
    link.click();
}

const ProjectGitLink2 = () => {
    const link = document.createElement('a')
    link.href = 'https://github.com/12609398MansonFang/3DPortfolio'
    link.target = '_blank';
    link.click();
}

const ProjectLink3 = () => {
    const link = document.createElement('a')
    link.href = 'https://mansonfang3dportfolio.com/'
    link.target = '_blank';
    link.click();
}

const ProjectGitLink3 = () => {
    const link = document.createElement('a')
    link.href = 'https://github.com/12609398MansonFang/ProtectTheCheese'
    link.target = '_blank';
    link.click();
}

const ProjectLink4 = () => {
    const link = document.createElement('a')
    link.href = 'https://mansonfang3dportfolio.com/'
    link.target = '_blank';
    link.click();
}

const ProjectGitLink4 = () => {
    const link = document.createElement('a')
    link.href = 'https://github.com/12609398MansonFang/3DPortfolio'
    link.target = '_blank';
    link.click();
}

const Projects = ({Height}) => {
    return (
        <div className='PageContainer' 
            style={PageContainerStyle(Height)}
        >
            <div className='ProjectsContainer'
                style={ContentContainerStyle(Height)}
            >
                <h1 className='ProjectsTitle'
                    style={{fontFamily: 'Serif',
                            fontSize: '45px'}}
                >   
                    Projects
                </h1>

                <div
                    className='ScrollableContent flex'
                    style={{
                        overflowX: 'auto',
                        maxHeight: '120vh',
                        width: '100%',
                        paddingLeft: '60px',
                        paddingRight: '15px',
                        paddingBottom: '20px',
                    }}
                >

                    <div className='flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:pl-40 pr-40'>
                        
                        <div className='WebDevContainer'>
                            <h1 className='font-serif font-bold text-lg'>Web Development</h1>

                            <div className='flex flex-row items-center justify-center space-x-5'>

                                <div className='Project1' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 12px 0px rgba(0, 0, 0, 0.5)', width: 250, height: 420}}>
                                    <h1 className='font-sans font-bold p-2'>
                                        Professional Portfolio Website
                                    </h1>

                                    <div>
                                        <img 
                                            src={img1} 
                                            alt='Left'
                                            style={{width: 150}}
                                        />
                                    </div>

                                    <p className='font-sans text-sm p-2'>Professional website with a slick, clean and responsive design. Made using, Javascript, React, Tailwind and NodeJS. </p>
                                    
                                    <div className='flex flex-col space-y-2'>
                                        <button 
                                            className="hover:bg-slate-100 text-black font-bold py-1 px-4 rounded shadow"
                                            style={{ boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.3)' }}
                                            onClick={ProjectLink1}
                                        >
                                            Visit
                                        </button>
                                        <button 
                                            className="hover:bg-slate-100 text-black font-bold py-1 px-4 rounded shadow"
                                            style={{ boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.3)' }}
                                            onClick={ProjectGitLink1}
                                        >
                                            GitHub
                                        </button>
                                    </div>
                                </div>

                                <div className='Project2' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 12px 0px rgba(0, 0, 0, 0.5)', width: 250, height: 420}}>
                                    <h1 className='font-sans font-bold p-2'>
                                        3D Website
                                    </h1>

                                    <div>
                                        <img 
                                            src={img2} 
                                            alt='Left'
                                            style={{width: 150}}
                                        />
                                    </div>

                                    <p className='font-sans text-sm p-2'>3D portfolio that provides interactive functionality and fun animations. Built with Javascript, React, Three.js, Tailwind CSS, and Blender.</p>
                                    
                                    <div className='flex flex-col space-y-2'>
                                        <button 
                                            className="hover:bg-slate-100 text-black font-bold py-1 px-4 rounded shadow"
                                            style={{ boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.3)' }}
                                            onClick={ProjectLink2}
                                        >
                                            Visit
                                        </button>
                                        <button 
                                            className="hover:bg-slate-100 text-black font-bold py-1 px-4 rounded shadow"
                                            style={{ boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.3)' }}
                                            onClick={ProjectGitLink2}
                                        >
                                            GitHub
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='GameDevContainer'>
                            <h1 className='font-serif font-bold text-lg'>Game Development</h1>
                            <div className='flex flex-row items-center justify-center space-x-5'>
                                <div className='Project1' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 12px 0px rgba(0, 0, 0, 0.5)', width: 250, height: 420}}>
                                    <h1 className='font-serif font-bold p-2'>
                                        Protect The Cheese
                                    </h1>

                                    <div>
                                        <img 
                                            src={img3} 
                                            alt='Left'
                                            style={{width: 150}}
                                        />
                                    </div>

                                    <p className='font-sans text-sm p-2'>An interactive and entertaining browser-based guessing game with a user-friendly React GUI, offering word-based challenges, engaging and approachable hints, and a visually engaging design for an immersive and enjoyable player experience. </p>
                                    
                                    <p className='font-sans text-sm p-2'>Head To Projects and Hit 'Play Game'</p>

                                    <div className='flex flex-col space-y-2'>
                                        <button 
                                            className="hover:bg-slate-100 text-black font-bold py-1 px-4 rounded shadow"
                                            style={{ boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.3)' }}
                                            onClick={ProjectLink3}
                                        >
                                            Visit
                                        </button>
                                        <button 
                                            className="hover:bg-slate-100 text-black font-bold py-1 px-4 rounded shadow"
                                            style={{ boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.3)' }}
                                            onClick={ProjectGitLink3}
                                        >
                                            GitHub
                                        </button>
                                    </div>
                                    
                                </div>

                                <div className='Project2' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 12px 0px rgba(0, 0, 0, 0.5)', width: 250, height: 420}}>
                                    <h1 className='font-serif font-bold p-2'>
                                        Hit The Skies
                                    </h1>

                                    <div>
                                        <img 
                                            src={img4} 
                                            alt='Left'
                                            style={{width: 150}}
                                        />
                                    </div>

                                    <p className='font-sans text-sm p-2'>A cool JavaScript flying game with fun controls and great visuals. The plan is to build a simulator using real-time flight data, incorporating both global and local coordinates. Exciting updates, including collision detection and a weapons system, are on the way for even more fun. </p>
                                    
                                    <p className='font-sans text-sm p-2'>Head To Projects and Hit 'Play Game'</p>

                                    <div className='flex flex-col space-y-2'>
                                        <button 
                                            className="hover:bg-slate-100 text-black font-bold py-1 px-4 rounded shadow"
                                            style={{ boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.3)' }}
                                            onClick={ProjectLink4}
                                        >
                                            Visit
                                        </button>
                                        <button 
                                            className="hover:bg-slate-100 text-black font-bold py-1 px-4 rounded shadow"
                                            style={{ boxShadow: '0 4px 4px 0px rgba(0, 0, 0, 0.3)' }}
                                            onClick={ProjectGitLink4}
                                        >
                                            GitHub
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>









            </div>
        </div>
    )
}

export default Projects