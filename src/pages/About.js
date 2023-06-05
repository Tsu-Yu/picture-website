import React from "react";

const About = () => {
  const handleContact = () => {
    window.location.href = "mailto:carrie91507@gmail.com";
  };
  return (
    <div style={{ minHeight: "100vh" }} className="about-container">
      <h1 className="about-title">About us</h1>
      <div className="about-content">
        <p>National Central University</p>
        <p>資管三Ｂ 學號：109403035</p>
        <p>張羽慈的製作</p>
        <p>Email: carrie91507@gmail.com</p>
        <button onClick={handleContact}>Contact me</button>
      </div>
    </div>
  );
};

export default About;
