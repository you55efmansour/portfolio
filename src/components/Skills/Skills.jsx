import './Skills.scss'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'
export default function Skills() {
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

    <div className="skills-page content">
        <div className="container skills-c">
            <div className="text-zone d-flex justify-content-center">
                <h1 className='position-relative title'>
                    <AnimatedLetters letterClass={letterClass} strArray={['skills']} idx={15}/>
                </h1>
                <p>
                    Expert in front-end development including technologies like 
                    <span className='tec'> HTML5</span>,
                    <span className='tec'> CSS3</span>,
                    <span className='tec'> JavaScript</span>,
                    <span className='tec'> React</span>,
                    <span className='tec'> TypeScript</span>,
                    <span className='tec'> Bootstrap</span>,
                    <span className='tec'> Sass</span>,
                    <span className='tec'> Git</span>, etc...
                    <span className='tec'>(never stop learning)</span>
                </p>
                <p>
                    I’m not a designer but I have a good sense of aesthetics, and
                    experience in responsive, mobile-first web design. I put special
                    effort into optimizing my code and providing the best user
                    experience. I would love to give you any kind of support also after
                    the project's completion. I guarantee a commitment during work on
                    your project.        
                </p>
            </div>
        </div>
    </div>
    <Loader type='ball-clip-rotate-multiple'/>
    </>
  )
}