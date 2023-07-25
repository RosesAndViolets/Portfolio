import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-j.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] =
    useState(
      'text-animate'
    ) /* want to start with text-animate, but later want to add hover-animation. Cant have 2 animations at any given moment, so use states to transition between them */
  const nameArray = ['o', 'o', 'i', 'n', 'h', ' ', 'P', 'a', 'r', 'k']
  const jobArray = ['a', ' ', 's', 't', 'u', 'd', 'e', 'n', 't', ' ', 'a', 't']
  const univArray = [
    'R',
    'I',
    'T',
    'S',
    'U',
    'M',
    'E',
    'I',
    'K',
    'A',
    'N',
    ' ',
    'U',
    'N',
    'I',
    'V',
  ]
  useEffect(() => {
    /* remove return for setTimeout so that 'destroy() is 1' error is solved*/
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
  }, []) /* empty array for dependencies so this runs only once */

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>{' '}
          {/* 12 is gonna translate to 1.2s delay for the bounceIn animation */}
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={25}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={univArray}
            idx={43}
          />
        </h1>
        <h2>Prospective Network expert / A Wannabe Full stack Dev</h2>
        <Link to="/Contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
