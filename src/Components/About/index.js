import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const About = () => {
  const [letterClass, setLetterClass] =
    useState(
      'text-animate'
    ) /* want to start with text-animate, but later want to add hover-animation. Cant have 2 animations at any given moment, so use states to transition between them */

  /* change class to 'text-animate-hover' from 'animatedLetters' after 6s */
  useEffect(() => {
    /* remove return for setTimeout so that 'destroy() is 1' error is solved*/
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []) /* empty array for dependencies so this runs only once */

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15} /* 1.5s delay */
          />
        </h1>
        <h2>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['H', 'o', 'b', 'b', 'y']}
            idx={23} /* 1.5s delay */
          />
        </h2>
        <p>
          I played the drums for quite some time now. I still do sessions with
          my friends back in Korea when I get the chance to meet them
        </p>
        <p>
          I also like to create little services that help with my productivity.
          A simple Notes apps or a chat app etc.
        </p>
      </div>
    </div>
  )
}

export default About
