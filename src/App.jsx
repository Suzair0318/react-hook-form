import React from 'react';
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import { Hook_Form_All } from './Components/Hook_Form_All';
import { Addmission_Form } from './Components/Form_Context/Addmission_Form';
import { Image } from './Components/Image_Validation/Image';
function App() {

  return (
    <>
     <Router>
       <Routes>
         <Route path="/" element={<Addmission_Form/>} />
         <Route path="/All_Form" element={<Hook_Form_All />} />
         <Route path='/Image' element={<Image/>} />
       </Routes>
     </Router>
      
    </>
  )
}

export default App
