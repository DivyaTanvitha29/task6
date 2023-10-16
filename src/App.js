// App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header>
        <img
          src="C:\Users\divya\Documents\Mern FullStack\task6\src\WhatsApp Image 2023-06-10 at 20.17.14_87de7258.jpg" 
          alt="Profile" 
          className="profile-pic"
        />
        <h1>K. Divya Tanvitha</h1>
        <p>3rd Year, 2nd Semester | VIT-AP University</p>
        <p>Web Developer | Data Science Intern</p>
      </header>
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I am a third-year student at VIT-AP University, pursuing a degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. I have a current GPA of 8.7. I am passionate about web development and have experience working on projects, including a leaf disease detection system. I am also an active member of the CSI Club.
        </p>
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>10th Standard: 10 CGPA</p>
        <p>Intermediate: 977/1000</p>
        <p>Current GPA: 8.7 (CSE, AIML Specialization)</p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <p>Data Science Intern</p>
        <p>Languages: Python, HTML, CSS, JavaScript</p>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Leaf Disease Detection</h3>
          <p>A project focused on detecting diseases in plant leaves using advanced image processing techniques.</p>
        </div>
        {/* Add more project details if needed */}
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: divyakamireddy3737@gmail.com</p>
        <p>Phone: 6302522417</p>
        {/* Add more contact information */}
      </section>
    </div>
  );
}

export default App;
