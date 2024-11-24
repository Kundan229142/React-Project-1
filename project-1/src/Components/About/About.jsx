import React from "react";
import "./About.css";
import Image from './image.jpg'

const About = () => {
  return (
    <section className="about" id="about">
      <h1>About Us</h1>
      <div className="box">
        <div className="img-box">
          <img src={Image} alt=""/>
        </div>

        <div className="about-box">
          <h1>Kundan Prajapati</h1>
          <h5>Tech Student || Programmer</h5>
          <p>
            Hey Everyone !
            Thankyou for viewing my profile.

            My name is Kundan Prajapati. I am Currently BCA (Bachelors Of Computer Application) Final Year Student at St. Andrwes instutite of Technology and Management affileated from MDU Rohtak.

            I am Skilled in frontend development. I am familiar with lastest technologies in this such as HTML5, CSS, Javascript. Also I have knowledge and keen interest and love to code in C and C++.

            I am really passionate student about getting involved to learn new skills.
          </p>
          <a href="https://www.linkedin.com/in/kundanprajapati03/" className="btn">Follow Me</a>
        </div>
      </div>
    </section>
  );
};

export default About;
