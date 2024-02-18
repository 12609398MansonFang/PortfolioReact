import React, { useState, useEffect } from 'react'

import AboutMe from './Pages/AboutMe'
import Education from './Pages/Education'
import Projects from './Pages/Projects'
import WorkExperience from './Pages/WorkExperience'
import ContactMe from './Pages/ContactMe'
import MyCV from './Pages/MyCV'

import LeftLogo from './Assets/Images/Left.png'
import RightLogo from './Assets/Images/Right.png'
import BGImg from './Assets/Images/Background.jpg'
import MenuLogo from './Assets/Images/MenuIcon.png'

const App = () => {
    const [ menu, setMenu ] = useState(false)
    const [ collapse, setCollapse ] = useState(false)
    const [ windowDimension, setWindowDimension] = useState({winWidth: window.innerWidth, winHeight: window.innerHeight})
    const [ page, setPage] = useState(0)
    // 0 - About Me
    // 1 - Education
    // 2 - Projects
    // 3 - Work Experience 
    // 4 - Contact Me
    // 5 - MyCv

    const detectSize = () => {
      setWindowDimension({winWidth: window.innerWidth, winHeight: window.innerHeight})
    }

    useEffect(() => {
      window.addEventListener('resize', detectSize)
      return() => {
        window.removeEventListener('resize', detectSize)
      }
    }, [windowDimension]) 

    useEffect(() => {
      if(windowDimension.winWidth <= 575){
        setCollapse(true)
      } else {
        setCollapse(false)
        setMenu(false)
      }
    }, [windowDimension])

    const SelectPage = () => {
      if ( page === 0 ) {
        return ( <AboutMe Width={windowDimension.winWidth} Height={windowDimension.winHeight} /> )
      } else if ( page === 1 ){
        return ( <Education Height={windowDimension.winHeight} /> )
      } else if ( page === 2 ){
        return ( <Projects Height={windowDimension.winHeight} /> )
      } else if ( page === 3 ){
        return ( <WorkExperience Height={windowDimension.winHeight} /> )
      } else if ( page === 4 ){
        return ( <ContactMe Height={windowDimension.winHeight} /> )
      } else if ( page === 5 ){
        return ( <MyCV Height={windowDimension.winHeight} /> )
      } 
    }

    const Arrow = (direction) => {
      if (direction === 0) {  // Left
        if (page === 0) {
          return () => setPage(5)
        } else {
          return () => setPage(page - 1)
        }
      } else if (direction === 1) {  // Right
        if (page === 5) {
          return () => setPage(0)
        } else {
          return () => setPage(page + 1)
        }
      } 
    }

    const ExpandMenu = () => {

      const handleResumeClick = () => {
        setPage(5)
        setMenu(false)
      }

      const handleAboutMeClick = () => {
        setPage(0)
        setMenu(false)
      }

      const handleEducationClick = () => {
        setPage(1)
        setMenu(false)
      }

      const handleProjectsClick = () => {
        setPage(2)
        setMenu(false)
      }

      const handleWorkExperienceClick = () => {
        setPage(3)
        setMenu(false)
      }

      return(
        <div className='flex flex-col'>
          <button 
                className='font-bold hover:text-slate-200'
                onClick={handleResumeClick}
                >MY RESUME
          </button>

          <button
              className='font-bold hover:text-slate-200'
              onClick={handleAboutMeClick}
          >About me</button>  
        
          <button 
              className='font-bold hover:text-slate-200'
              onClick={handleEducationClick}
          >Education</button>

          <button 
              className='font-bold hover:text-slate-200' 
              onClick={handleProjectsClick}
          >Projects</button>

          <button 
              className='font-bold hover:text-slate-200' 
              onClick={handleWorkExperienceClick}
          >Work Experience</button>
      </div>
      )
    }

    const MenuButton = () => {
      return(
          <button
            onClick={() => setMenu(!menu)}
          >
            <img 
              src={MenuLogo} 
              className='w-6 h-6'
            />
          </button>  
      )
    }

    const ExpandHeader = () => {
      return (
        <div className='Header flex items-center justify-between bg-white pt-3 pb-2'>

          <div className='HeaderCV pl-5'>
              <button 
                className='font-bold hover:text-slate-200'
                onClick={() => setPage(5)}
                >MY RESUME
              </button>
          </div>

          <div className='HeaderOther flex justify-end space-x-6 px-8'>
            <button
              className='font-bold hover:text-slate-200'
              onClick={() => setPage(0)}
            >About me</button>  

            <button 
              className='font-bold hover:text-slate-200'
              onClick={() => setPage(1)}
            >Education</button>


            <button 
              className='font-bold hover:text-slate-200' 
              onClick={() => setPage(2)}
            >Projects</button>

            <button 
              className='font-bold hover:text-slate-200' 
              onClick={() => setPage(3)}
            >Work Experience</button>           
          </div>
        </div>

      )
    }

    const CollapseHeader = () => {
      return (
        <div className='Header flex items-center justify-center  bg-white pt-3 pb-2'>
          <div className='HeaderOther flex flex-col justify-center items-center'>
            <MenuButton/>
            {menu && <ExpandMenu />}
          </div>
        </div>
      )
    }

    const handleContactClick = () => {
      setPage(4)
      setMenu(false)
    }

  return (
    <div className='PortfolioContainer w-full h-full flex flex-col'
        style={{backgroundImage: `url(${BGImg})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center'}}
    >

      {collapse ? <CollapseHeader /> : <ExpandHeader />}

      <div className='Content flex justify-center'>
        {!collapse && 
          <button onClick={Arrow(0)}>
            <img 
              src={LeftLogo} 
              alt='Left'
              className='w-8 h-8 hover:w-12 hover:h-12'
            />
          </button>       
        }
        <SelectPage/>
        {!collapse && 
          <button onClick={Arrow(1)}>
            <img 
              src={RightLogo} 
              alt='Right'
              className='w-8 h-8 hover:w-12 hover:h-12'
            />
          </button>      
        }
      </div>

      <div className='Footer flex justify-end items-end space-x-4 px-8 bg-white bg-opacity-80 pt-3 pb-3'>
        <button 
          className='font-bold hover:text-slate-200'
          onClick={handleContactClick}
          >Contact Me</button>
      </div>
    </div>
  )
}

export default App