import {Routes , Route} from 'react-router-dom'
// import Contacts from './components/Contacts';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


import React, { useState } from 'react';

import Text from './components/Text';
import Alert from './components/Alert';
// import About from './components/About';
// import Footer from './components/Footer';
// import Purchase from './components/Purchase';

// import Heading from './components/Heading';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [primary, setprimary] = useState({ type: 'dark' });
  const showprimary =(type)=>{
    setprimary({
      type : type,
    })
  }
//writing a method
  const showAlert =(message, type)=>{
setAlert ({
  msg : message,
  type :type,
})
setTimeout(() => {
  setAlert(null);
  
}, 1500);

setInterval(() => {
  document.title ="Text Converter-Adil Aslam"
  
}, 2000);
setInterval(() => {
  document.title ="Text Converter-Aaliyan Aslam"
  
}, 1500);

  }

  const toggleMode = ()=>{
    // const [socolor, setsoc] = useState(light);
      if (mode === 'light'){
setMode ('dark');
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
showAlert("dark mode enabled","success");
showprimary("primary");

      }
      else{

        setMode ('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        showAlert("light mode enabled","warning");
        showprimary("dark");
      }

  } 
  

  return (
    <div className="App">
     
      <Routes>
        
        <Route path='/' element={<Home   title="TexoToFy"/>}>Home</Route>
        <Route path='/About' element={<About/>}>About</Route>
        <Route path='/Contact' element={<Contact/>}>Contact</Route>

       
      </Routes>
      <Text  mode={mode} showAlert={showAlert}  socolor={primary}/>
    </div>
  );
}

export default App;
