import React from 'react'
import Title from '../../components/title/Title'
import './Home.sass'

export default function Home() {
  return (
    <div className='home'>
      <Title size={70} />
      <h2>What is it?</h2>
      <p>This is just a project full of animations I am experimenting with different elements.
        Feel free to use these animations on your projects or check out the source code.
      </p>
    </div>
  )
}
