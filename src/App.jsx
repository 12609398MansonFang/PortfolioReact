import React, { useState, useEffect } from 'react'

import AboutMe from './Pages/AboutMe'
import Education from './Pages/Education'
import Projects from './Pages/Projects'
import WorkExperience from './Pages/WorkExperience'
import ContactMe from './Pages/ContactMe'
import MyCV from './Pages/MyCV'

import LeftLogo from './Assets/Images/Left.png'
import RightLogo from './Assets/Images/Right.png'

const App = () => {
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

  return (
    <div className='PortfolioContainer w-full h-screen flex flex-col'>
      <div className='Header flex items-center justify-between'>

        <div className='HeaderCV pl-3 pt-3'>

            <button 
              className='hover:font-bold '
              onClick={() => setPage(5)}
              >My Resume</button>

        </div>

        <div className='HeaderOther flex justify-end space-x-6 px-8 pt-4'>


          <button
            className='hover:font-bold'
            onClick={() => setPage(0)}
          >About me</button>  

          <button 
            className='hover:font-bold'
            onClick={() => setPage(1)}
          >Education</button>


          <button 
            className='hover:font-bold' 
            onClick={() => setPage(2)}
          >Projects</button>

          <button 
            className='hover:font-bold' 
            onClick={() => setPage(3)}
          >Work Experience</button>
          
        </div>

      </div>

      <div className='Content flex justify-center'>

        <button onClick={Arrow(0)}>
          <img 
            src={LeftLogo} 
            alt='Left'
            className='w-8 h-8 hover:w-12 hover:h-12'
          />
        </button>

      
        <SelectPage/>

        <button onClick={Arrow(1)}>
          <img 
            src={RightLogo} 
            alt='Right'
            className='w-8 h-8 hover:w-12 hover:h-12'
          />
        </button>

      </div>

      <div className='Footer flex justify-end space-x-4 px-8'>

        <button 
          className='hover:font-bold'
          onClick={() => setPage(4)}
          >Contact Me</button>

      </div>
    </div>
  )
}

export default App