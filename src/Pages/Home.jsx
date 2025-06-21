
import { Link } from "react-router-dom";
import './Home.css'

const Home=()=>{
    return(
      <div className="content">
      <div className="page-container">
        <div className="hero-section">
         
          <img
            alt="Vivekanand College Campus"
            className="hero-banner-image"
            src="/images/vck.png"
          />
          <div className="hero-overlay-text">
            <h1>Welcome to Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>
            <Link className="btn hero-btn" to="/admission" data-discover="true">
              Apply Now!
            </Link>
          </div>
        </div>

        <p>
          <strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic
          excellence, innovation, and holistic development. Established in <strong>1980</strong>, we have proudly
          served generations of students, empowering them to achieve their full potential.
        </p>

        <p>
          At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our
          state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem
          where curiosity thrives and future leaders are shaped.
        </p>

        <h2>Why Choose Vivekanand College?</h2>
        <ul>
          <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
          <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
          <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
          <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
          <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
        </ul>

        <h2>Campus Life & Facilities</h2>
        <div className="image-gallery">
          <img alt="Students studying in library" src="/images/vckstd.jpg"/>
          <img alt="Students on campus ground" src="/images/vck.jpg" />
        </div>

        <p>
          Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and
          personal growth.
        </p>

        <div className="call-to-action">
          <p>Ready to explore our courses?</p>
          <Link className="btn" to="/courses" data-discover="true">
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
    )
}

export default Home;