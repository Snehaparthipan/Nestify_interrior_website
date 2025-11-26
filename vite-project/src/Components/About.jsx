import React from 'react'
import Navbar from './Navbar'
import { useEffect, useState } from "react";
import aboutimg from "../assets/About1.jpeg"


export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <div className={`hero-container ${loaded ? "fade-in" : ""}`}>
      <div className="hero-left">
        <h1 className="hero-title">
          Delightful Interiors, <br /> Made To Live
        </h1>

        <p className="hero-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          dolores temporibus voluptatum, esse aspernatur perspiciatis,
          quibusdam, unde dolorum provident voluptatem minus. Aliquam,
          reprehenderit et consequuntur deserunt culpa repudiandae soluta
          quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.Magnivoluptatem modi commodi quasi iure! Eveniet, sunt? Modi
          ipsamquovoluptas.
        </p>

        <button className="consult-button">Request Consultation</button>
      </div>
      <div className="hero-right">
        <img src={aboutimg} alt="Interior Design" className="hero-image" />
      </div>
    </div>
  );
}
