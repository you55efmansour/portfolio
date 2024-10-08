import './About.scss'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { Helmet } from 'react-helmet'

export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')
  
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
                <title>About</title>
            </Helmet>

            <div className='content about-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15}
                        />
                    </h1>
                    <p>
                    I’m very ambitious front-end developer looking for a role in
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p>
                I'm quietly confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                If I need to define myself in one sentence that would be a family
                    person, a sports fanatic, and tech-obsessed!!!   
                </p>
                </div>
                <div className="stage">
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4d28'/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Loader type='ball-clip-rotate-multiple'/>
        </>
  )
}
