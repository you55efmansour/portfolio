import React, { useEffect, useState } from 'react'
import './Projects.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import projectsData from '../../data/projects.json'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


export default function Projects() {
 const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timerId)
        }
    }, [])

    const renderProject = (project) => {
        return(
            <div className='images-container'>
                {
                    project.map((proj, i) => {
                        return (
                        <Link target='_blank' to={proj.url} className='image-box' key={i}>
                                <img 
                                src={`${process.env.PUBLIC_URL}${proj.img}`}
                                className='project-image'
                                alt="project" key={i}/>
                            <div className="img-content">
                                <p className="title">{proj.title}</p>
                                <h4 className='description'>{proj.description}</h4>
                            </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
    
  return (
    <>
        <Helmet>
                <meta charSet='utf-8' />
                <title>Projects</title>
        </Helmet>
        <div className="content projects-page">
            <h1 className='page-title'>
                <AnimatedLetters
                letterClass={letterClass}
                    strArray={['Projects']}
                    idx={15}
                />
            </h1>
            <div className="project-page-content container">
                    <div>{renderProject(projectsData.project)}</div>
            </div>
        </div>
        <Loader type='ball-clip-rotate-multiple'/>
    </>
  )
}
