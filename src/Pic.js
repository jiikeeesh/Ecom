import React from 'react'



const Pic=(props)=> {
    return (
        <>
        <div className='row'>
          
          <div className="card" style={{width:500}}>
  <img src={props.imgURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{props.Title}</p>
  </div>
</div>
</div>
        </>
    )
    }

export default Pic
