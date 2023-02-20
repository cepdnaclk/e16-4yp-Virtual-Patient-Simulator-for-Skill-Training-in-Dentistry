import React from 'react'
import spinner from './spinner2.gif'
import './Load.css'
function Loader() {
  return (
    <div className='spin'>
      <div>
        <h5 className='textF'>
3D-view is loading
        </h5>
      </div>
      <img
        src={spinner}
        style={{ width: '50px', height: '50px', marginLeft: '500px' , display: 'block', top: '80%' }}
        alt="Loading..."
      />
    </div>
  )
}

export default Loader