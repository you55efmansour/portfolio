import './AnimatedLetters.scss'
import React from 'react'

export default function AnimatedLetters({letterClass, strArray, idx}) {
  return (
    <span>
        {
            strArray.map((char,i)=>(
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
}
