import React from 'react'

export default function Biography({ text }) {
  return (
    <div className='biography'>
        <h3>Biography</h3>
        <p className='text'>{ text }</p>
    </div>
  )
}
