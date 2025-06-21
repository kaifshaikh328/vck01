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
import ChatbotComponent from "./Components/Chaatbot/Chatbotcomponents.jsx";

const App=()=>{
  return(
    <div>
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
        <ChatbotComponent></ChatbotComponent>
      </div>
      <Footer/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;