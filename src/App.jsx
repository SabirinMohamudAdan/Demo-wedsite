
import Events from './componet/events'

import { Route, Routes } from 'react-router-dom'

import Mainproject from './componet/mainproject'


function App() {


  return (
    <>
  

<Routes>
  <Route path='/' element={<Mainproject/>}/>

  
  <Route path='/event' element={<Events/>}/>

</Routes>
       
    </>
    
  )
}

export default App
