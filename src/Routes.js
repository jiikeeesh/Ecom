import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './Header/Navbar'
import Home from './Header/Home' 
import Contact from './Contact'
import Foots from'./Footer/Foots'
import Links from './Links'
// import Pic from './Pic'
import Picss from './Picss'



const Routes=()=> {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
            <switch>        
            <Route exact path='/' component={Home}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/links' component={Links}/>
            <Route exact path='/pic' component={Picss}/>
            </switch>
            <Foots/>
            </BrowserRouter>
        </>
    )
}

export default Routes
