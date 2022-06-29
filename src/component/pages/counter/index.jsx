import React, { useState } from 'react'
import Button from '../button/button';

const Home = (props) => {
    console.log(props);
    const [counter , setCounter] = useState(0);
    
  return (
    <div className='text-center container my-5'>
        <Button setCounter={setCounter} counter={counter} incr='increment' decr='decrement'></Button>
    </div>
  )
}

export default Home