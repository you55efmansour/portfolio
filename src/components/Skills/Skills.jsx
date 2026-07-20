import './Skills.scss'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from 'react-loaders'

export default function Skills() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timerId = setTimeout(() => setLetterClass('text-animate-hover'), 4000)
        return () => clearTimeout(timerId)
    }, [])

    return (
        <>
            <div className="skills-page content">
                <div className="container skills-c">
                    <div className="text-zone">
                        <h1 className="title">
                            <AnimatedLetters letterClass={letterClass} strArray={'Skills'.split('')} idx={15} />
                        </h1>
                        <p>
                            I build responsive, accessible front-end experiences using
                            <span className="tec"> HTML</span>, <span className="tec">CSS</span>,
                            <span className="tec"> Sass</span>, <span className="tec">Bootstrap</span>,
                            <span className="tec"> Tailwind CSS</span>, <span className="tec">JavaScript</span>,
                            and <span className="tec">TypeScript</span>.
                        </p>
                        <p>
                            My main focus is building modern interfaces with
                            <span className="tec"> React</span> and <span className="tec">Next.js</span>,
                            using <span className="tec">Redux</span> or <span className="tec">MobX</span>
                            when an application needs structured state management. I care about clean code,
                            performance, mobile-first layouts, and a polished user experience.
                        </p>
                        <p>
                            I also have a solid foundation in back-end development with
                            <span className="tec"> Node.js</span>, and I can build cross-platform mobile
                            applications using <span className="tec">React Native</span>. I use
                            <span className="tec"> Git</span> and <span className="tec">GitHub</span> throughout
                            my workflow, and I am always improving my skills through real projects.
                        </p>
                    </div>
                </div>
            </div>
            <Loader type="ball-clip-rotate-multiple" />
        </>
    )
}
