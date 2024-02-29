import React, { useEffect, useState } from 'react'
import Background from './Components/background/Background'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero'

const App = () => {
  let heroData = [
    {text1:'Dive into', text2:'what you love'},
    {text1:'Indulge', text2:'your passions'},
    {text1:'Give into', text2:'what you love'}
  ]

  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(() => {
    setInterval( ()=> {
      setHeroCount(count => {return count===2?0:count+1})
    }, 3000)
  }, [])
  return (
    <div>
      {/* Check css for how bg is above navbar and still stays (positioning) */}
      <Background playStatus={playStatus} heroCount={heroCount}  />
      <Navbar/>
      <Hero setPlayStatus={setPlayStatus}
       heroData={heroData[heroCount]} 
       heroCount={heroCount}
       setHeroCount={setHeroCount}
       playStatus={playStatus}
       />
    </div>
  )
}

export default App