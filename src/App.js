
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import Alert from './component/Alert';
function App() {

  const [mode, setmode] = useState('light') // dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
        msg : message,
        type : type
      })
      setTimeout(() =>{
        setAlert(null);
      },1500);
  } 
  const toggleMode = () =>{
    if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode enabled" , "success");
    }
    else 
    {
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode enabled" , "success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container mb-3">
    <TextForm heading="Enter text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
