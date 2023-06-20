import React from 'react'
import { nanoid } from 'nanoid'
const Lorem = ({paragraphs}) => {
    
  return (
    <article className="lorem-text">
        {paragraphs.map((paragraph) => {
          const id = nanoid() 
            return <p key={id}>{paragraph}</p>
        })}
    </article>
  )
}

export default Lorem