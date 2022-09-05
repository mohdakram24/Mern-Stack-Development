// 1. React components are functions.
// 2. Function name must start with uppercase letter.
// 3. Function should return atleast single JSX element.
// 4. Function should be exported.

import React from 'react'
import myimg1 from '../image/srk.jpg'

const Home = () => {
  return (
    <div>
        <h1 className='myclass' style={{color:"red",backgroundColor:"yellow"}}>Home Page</h1>
        <hr />
        {/* <img src="../image/srk.jpg" alt="" /> */}
        <img src={myimg1} alt="" />
    </div>
  )
}

export default Home;