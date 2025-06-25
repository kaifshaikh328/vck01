

import { Link } from "react-router-dom";
import './Courses.css'
const Courses=()=>{
    return(
        <div className="page-container">
    <h1 id="h1">Our Academic Programs</h1>
      
      <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
      
        <h1 id="h1">Discover Campus Life</h1>
    
    <video id='vid' src="/images/vck.mp4" controls loop/>
   
   <h2 id="h2">Undergarduate Programs(UG)</h2>
    <ul> <h2 id="h2">Bachelor of science (B.sc)</h2>
      <li><h1 id="h1">Computer Science (3 years)</h1></li>
      <li>Information Technology (3 years)</li>
      <li>Biotechnology (3 years)</li>
      <li><h1 id="h1">Bachelor of Commerce (B.Com)</h1></li>
      <li>Accounting & Finance (3 years)</li>
      <li>Banking & Insurance (3 years)</li>
      <li><h1 id="h1">Bachelor of Arts (B.A.)</h1></li>
      <li>English Literature (3 years)</li>
      <li>Psychology (3 years)</li>
    </ul>

 <h2 id="h2">Postgraduate Program(PG)</h2>
   <ul><h2>Master of science (M.sc)</h2></ul>
    <li>Computer Science (2 years)</li>
    <li>Information Technology (2 years)</li>

    <ul><h2 id="h2">Master of Commerce (M.Com) (2 years)</h2></ul>

    <ul>Master of Arts (M.A.) (2 years)</ul>

    <h1 id="h1">Program Details & Fee Structure (Annual)</h1>

    <table>
    <thead>
      <tr>
        <th>Program Type</th>
        <th>Course Name</th>
        <th>Duration</th>
        <th>Annual Fee (INR)</th>
        <th>Eligibility</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>UG</td>
        <td>B.Sc. Computer Science</td>
        <td>3 Years</td>
        <td>₹ 85,000</td>
        <td>10+2 with PCM (50%)</td>
      </tr>
      <tr>
        <td>UG</td>
        <td>B.Com. Accounting & Finance</td>
        <td>3 Years</td>
        <td>₹ 70,000</td>
        <td>10+2 Commerce (45%)</td>
      </tr>
      <tr>
        <td>PG</td>
        <td>M.Sc. Information Technology</td>
        <td>2 Years</td>
        <td>₹ 95,000</td>
        <td>B.Sc. IT/CS (50%)</td>
      </tr>
    </tbody>
  </table>

<h1 id="h1">Specialized and Vocational Courses</h1>
<p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>

<p>have quetion about specific courses</p>
    
    <Link to = "/contact"
    className='inquire-button'>inquire button about courses</Link>
  </div>
    )
}

export default Courses;