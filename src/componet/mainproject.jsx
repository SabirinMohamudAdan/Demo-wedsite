import React from 'react'
import Home from './home'
import Header from './header'
import Content from './content'

import Propslist from './propslist'
import About from './about'
import Videoparts from './videoparts'
import Slideprops from './slideprops'
import Footer from './footer'

function Mainproject() {
  return (
    <div>
       <Header/>
        <Home/>
       <Content/>
       
       <Propslist/>
       <About/>
       <Videoparts/>
       <Slideprops/>
       <Footer/>


    </div>
  )
}

export default Mainproject