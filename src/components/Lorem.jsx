import React from 'react'
import { nanoid } from 'nanoid'
const Lorem = ({paragraphs}) => {
    const id = nanoid() 
    
  return (
    <article className="lorem-text">
        {paragraphs.map((paragraph) => {
            return <p key={id}>{paragraph}</p>
        })}
    </article>
  )
}

export default Lorem