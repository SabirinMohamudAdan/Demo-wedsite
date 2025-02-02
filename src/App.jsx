import { useState } from 'react'
import Content from './componet/content'
import Content2 from './componet/content2'
import Propcontent from './componet/propcontent'
import Header from './componet/header'
import Propslist from './componet/propslist'
import About from './componet/about'
import Videoparts from './componet/videoparts'
import Footer from './componet/footer'
import Slides from './componet/slides'
import Slideprops from './componet/slideprops'
import Events from './componet/events'
import Eventlist from './componet/eventlist'
import { Route, Routes } from 'react-router-dom'
import Home from './componet/home'
import Mainproject from './componet/mainproject'


function App() {


  return (
    <>
    {/* <Header/>
    <Content/>
    <Content2/>
 <Propslist/>

 <About/>
 <Videoparts/>
 <Slideprops/>
 

 <Footer/>
 
<Events/> */}

<Routes>
  <Route path='/' element={<Mainproject/>}/>

  
  <Route path='/event' element={<Events/>}/>

</Routes>
       
    </>
    
  )
}

export default App
