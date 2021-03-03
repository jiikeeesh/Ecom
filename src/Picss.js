import React from 'react'
import Pic from './Pic'
import Picdata from './Picdata'

const Picss=()=> {
    return (
        <>
        
        {Picdata.map(item=>
            <Pic key={item.id} imgURL={item.imgURL} Title={item.Title}/>
        )}
        
            </>
    )
}

export default Picss