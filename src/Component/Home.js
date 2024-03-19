import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>
       <div className='container'>
      <h2 > Welcome to Talent Management System !!</h2>
    <div className='home about' style={{columnGap:'25'}}>
      <p><strong style={{fontSize:'29px'}}>Our Vision:</strong>
        <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; We envision a future where every organization maximizes its potential by
        leveraging the full capabilities of its workforce.<br></br> Through our comprehensive Talent Management System, we 
        strive to create workplaces that inspire creativity, innovation, and collaboration,<br></br> ultimately driving
        sustainable growth and success.</p>

      <p><strong style={{fontSize:'29px'}}>Our Mission:</strong>
        <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Our mission is to revolutionize the way organizations manage their talent by
        offering cutting-edge technology solutions that<br></br> optimize every aspect of the employee lifecycle. We aim to
        empower businesses to build high-performing teams, foster a culture of continuous growth,<br></br> and achieve their 
        strategic objectives through effective talent management practices.</p>
    </div>
    <div className='home feature'>
      <br></br>
        <h2>Features</h2>
        <p>&emsp;&emsp;&emsp;Our talent management system offers a comprehensive set of features to streamline HR processes:</p>
        <ul>
          <li><strong> Recruitment :</strong> &emsp;Effortlessly manage job postings, applicant tracking, and candidate evaluation.</li>
          <br></br>
          <li><strong> Onboarding :</strong> &emsp;Seamlessly onboard new hires with automated workflows and personalized training plans.</li>
          <br></br>
          <li><strong> Performance Management :</strong> &emsp;Set goals, conduct performance reviews, and track employee progress in real-time.</li>
          <br></br>
          <li><strong> Learning and Development :</strong> &emsp;Provide access to a library of courses and resources for continuous employee growth.</li>
          <br></br>
          <li><strong> Career Planning :</strong> &emsp;Empower employees to set career goals and create development paths aligned with organizational objectives.</li>
          <br></br>
          <li><strong> Succession Planning :</strong> &emsp;Identify and nurture top talent for future leadership roles to ensure business continuity.</li>
        </ul>
    </div>
    <div className='home contact'>
         <h2>Contact Us</h2>
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Email : talent@example.com &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Phone : 04632-12345</p>
    </div>
    </div>
    <footer style={{fontSize:'17px', textAlign:'center'}}>
      <p> 2024 Talent Management System. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Home
