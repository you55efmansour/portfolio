import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import myPic from '../../assets/images/my-pic.jpg'
import Loader from 'react-loaders'
import { Helmet } from 'react-helmet'

export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I',"’",'m'," ",'Y','o','u','s','s','e','f',',']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    const hiArray = ['H','i',',']

    useEffect(() => {
      const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover')
      }, 4000)

      return () => {
          clearTimeout(timerId)
      }
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Portfolio</title>
      </Helmet>
    <div className='content home-page'>
            {/* start text zone  */}
            <div className="text-zone">
            <h1> <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={15}/> <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/> 
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15}/> 
                <br />
            </h1>
            <h2>Frontend Developer / Freelancer</h2>
            <Link to='/contact' className='contact-btn'>CONTACT ME</Link>
            </div>
            {/* end text zone  */}
            <div className="image-box">
              <div className="image">
                  <img className='img-fluid' src={myPic} alt="mypic" />
              </div>
            </div>
    </div>
    <Loader type='ball-clip-rotate-multiple'/>
    </>
  )
}
