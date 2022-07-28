import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState("");
  
  return (
    <div className="App">
      <button onClick={()=>{setCurrentPage("home")}}>home</button>
      <button onClick={()=>{setCurrentPage("about")}}>about</button>
      <button onClick={()=>{setCurrentPage("contact")}}>contact</button>            
    
      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
    </div>
  );
}

export default App;
