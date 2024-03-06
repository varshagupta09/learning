import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>


      <Link href="/login">Login</Link>
      <br />
      <Link href="/contact">contact</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/Signup">Signup</Link>

      <h1 style={{ color: 'red', fontSize: '5rem' }}>My Home Page</h1>
      <br />

      <input type="text" />
      <button className='my-btn'>Submit</button>

    </div>

  )
}

export default page