import React from 'react'
import {Link} from 'react-router-dom'

const Foots=()=> {
    return (
        <>
           <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <Link to="/" class="btn btn-primary">Home</Link>
  </div>
</div> 
        </>
    )
}

export default Foots
