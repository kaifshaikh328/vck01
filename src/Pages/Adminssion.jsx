import { Link } from "react-router-dom"
import './Admission.css'


const Admission=()=>{
    return(
      <div className="content">
        <div className="page-container">
            <h1>Admissions at Vivekanand College</h1>
    <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>
    <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office..</p>

    <h3>Eligibility Criteria for Undergraduate Programs</h3> 
       
    <table className="table">
    <tr>
      <th>Program</th>
      <th>Minimum Qualification</th>
      <th>Required Subjects</th>
      <th>Minimum Marks (%)</th>
    </tr>
    <tr>
      <td>B.Sc. Computer Science</td>
      <td>10+2 (or equivalent)</td>
      <td>Physics, Chemistry, Maths</td>
      <td>50%</td>
    </tr>
    <tr>
      <td>B.Com. Accounting & Finance</td>
      <td>10+2 (or equivalent)</td>
      <td>Commerce Stream</td>
      <td>45%</td>
    </tr>
    <tr>
      <td>B.A. English Literature</td>
      <td>10+2 (or equivalent)</td>
      <td>Any Stream</td>
      <td>40%</td>
    </tr>
  </table>

  <h3>Application Process</h3>
        <ul>
          <li>1.Online Application: Fill out the application form available on our portal. </li>
          <li>2.Document Submission: Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
          <li>3.Entrance Exam (if applicable):Appear for the college's entrance examination</li>
          <li>4.Merit List & Interview: Check the merit list and attend the interview if shortlisted.</li>
          <li>5.Fee Payment: Complete the admission by paying the required fees.</li>
        </ul>

        <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <Link className="nav-item" to="/courses">Courses page</Link> or <Link className="nav-item" to="/contact">Contact us </Link>directly.</p>

        </div>
        </div>
    )
}

export default Admission