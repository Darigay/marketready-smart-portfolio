import React from 'react';
import coverImage from "../../assets/cover/divya.jpg"

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <h2> Divya Arigay </h2>
      <img src={coverImage} className="my-2" style={{ width: "15%" }} alt="cover" />
      <div className="my-2">
        <p>
        I'm a full stack developer located in Utah. I have a serious passion for web development.
          Creating intuitive dynamic user experience.        
      I am a well organised person, hardworking problem solver, with high attention to detail.
      A family person and a mother of two kids.</p>
         
      
      </div>
    </section>
  );
}

export default About;