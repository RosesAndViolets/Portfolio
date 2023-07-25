import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  /* letterClass = text-animate, idx = 20 => return element of class = text-animate _20 */
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {' '}
          {/* class is set using letterClass and idx */}
          {char} {/* content of strArray */}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
