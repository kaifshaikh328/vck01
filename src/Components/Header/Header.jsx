import { Link } from "react-router-dom";
import './Header.css';

const Header=()=>{
  return(
    <header className="main-header">
       {/* <div className="college-name"> */}
   <h2 Link to="/">Vivekanand College</h2> <Link/>
    {/* </div> */}
      <nav className=" navbar desktop-nav">
     <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/about">About</Link>
      <Link className="nav-item" to="/courses">Courses</Link>
      <Link className="nav-item" to="/contact">Contact</Link>
      <Link className="nav-item btn primary-btn" to="/admission">Apply Now!</Link>
     </nav>
    </header>
  )
}

export default Header;