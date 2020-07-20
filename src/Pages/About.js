import React from "react";
import "./about.css";
import me from "../img/mypicmypic.jpg";
function About() {
  return (
    < div className="pr1" >
      <img src={me} className="image"></img>



      <div className="container1">
        <div>
          <h2>Bio</h2>
          <h3>
            Aspiring Web Developer, Grad Student at University of Cincinnati 2020. I am a grad student at UC, I have experience developing full-stack applications and designing front-end user interfaces. I love building React applications and full-stack applications and have worked on plenty of applications, UI during my free time. I am highly passionate about cloud technologies and I am a Professional      AWS Solutions Architect and DevOps Engineer (AWS 4x Certifed). Apart from academics, I love meeting new people, learning new things, and facing new challenges. I love traveling and I am always up for an adventure. My hobbies include Rock climbing and Swimming.
          </h3>
          <h2>What I Do</h2>
          <h3>
            Frontend Development, Java Full Stack Development, AWS Engineer
          </h3>

          <h2>My Skills</h2>
          <h3>
            AWS Solutions Architect, AWS DevOps Engineer, Frontend Engineer,
            Java, Spring Boot, React.js
          </h3>
        </div>
      </div>
    </div >

  );
}

export default About;
