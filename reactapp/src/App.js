import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/file';
import Alert from './components/Alert';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
   
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode is enabled", "success")
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Shabd-Kosh is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Shabd-Kosh Now ';
      // }, 1500);
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode is enabled", "success")
    document.title = 'TextUtils - Light Mode';

  }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
       <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />} />
            <Route exact path="/services" element={<Services mode={mode}/>} />
            <Route exact path="/contact" element={<Contact mode={mode}/>} />
       </Routes>
       </div> 
       </Router> 
    </>
  );
}

export default App;