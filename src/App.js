/* Name: Jooinh Park, Date: 7/25/2023 , Browser Used: Safari*/

import './App.scss'
import About from './Components/About'
import Home from './Components/Home'
import Layout from './Components/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
