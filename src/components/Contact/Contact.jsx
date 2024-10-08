import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'
import { Helmet } from 'react-helmet'

export default function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    const refForm = useRef()
   
   
    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timerId)
        }
    }, [])

   const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm( 
            'service_kbivp27',
            'template_64j5ejr',
            refForm.current ,
            '50ExHxaGCAVm4BfFY'
    )
        .then(
            () => {
                window.location.reload()
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
   }

  return (
    <>
    <Helmet>
        <meta charSet='utf-8' />
        <title>Contact</title>
    </Helmet>
    
    <div className="content contact-page">
    <div className="text-zone">
        <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','M','e']} idx={15}/>
        </h1>
        <p>
            I am interested in freelance opportunities – especially
            ambitious or large projects. However, if you have other request or
            question, don’t hesitate to contact me using below form
            either.
        </p>
    </div>
    <div className="form-zone">
        <form ref={refForm} onSubmit={sendEmail} name='my-form'>
            <ul>
                <li className='half'>
                    <input type="text" name="name" placeholder='Name' required />
                </li>
                <li className='half'>
                    <input type="email" name="email" placeholder='Email' required />
                </li>
                <li>
                    <input type="text" name="subject" placeholder='Subject' required />
                </li>
                <li>
                    <textarea name="message" placeholder='Message' required></textarea>
                </li>
                <li>
                    <input type="submit" className='flat-button' value="SEND" />
                </li>
            </ul>
        </form>
    </div>
    </div>
    <Loader type='ball-clip-rotate-multiple'/>
    </>
  )
}
