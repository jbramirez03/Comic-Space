import React from 'react'
import './App.css';
import { Button } from '@mui/material';


function App() {
  return (
  <>
<div className="App">
    <Button onClick={()=>alert("Just Kidding")} variant="outlined" >
  Click me to see your completed COMIC SPACE project 
    </Button>
    </div>
  </>
  );
}

export default App;
