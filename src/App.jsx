import React,{useState} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
//Pages
import About from "./Pages/About.jsx";
import Home from './Pages/Home.jsx'
import Courses from "./Pages/Courses.jsx";
import Contact from "./Pages/Contact.jsx";
import Admission from "./Pages/Adminssion.jsx";
import Notfound from "./Pages/Notfound.jsx";
//Components
import Header from './Components/Header/Header.jsx'
import Footer from "./Components/Footer/Footer.jsx";


import './App.css'
import ChatbotComponent from "./Components/Chaatbot/chatbotcomponent.jsx";
import DeveloperInfoPopup from "./Components/Developerinfo/DeveloperinfoPopup.jsx";

const App=()=>{
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup =()=>{
    setShowPopup(false);
  };

  return(
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Mahummadkaif Shaikh"
          studentPhotoUrl="/Screenshot 2025-06-13 165827.png" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
    </div>
      <BrowserRouter>
      <div className="main-layout">
      <Header/>
      <div className="content">
      <Routes>
        <Route path="/"element={<Home/>}/>
         <Route path="/about"element={<About/>}/>       
         <Route path="/courses"element={<Courses/>}/> 
         <Route path="/contact"element={<Contact/>}/> 
         <Route path="/admission"element={<Admission/>}/> 
         <Route path="*"element={<Notfound/>}/> 
      </Routes>
     <ChatbotComponent />
      </div>
      <Footer/>
      </div>
      </BrowserRouter>
    </>

  )
}

export default App;