import React from 'react'
import Navbar from './Navbar'
import { useEffect, useState } from "react";

export default function HeroSection() {
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni voluptatem modi commodi quasi iure! Eveniet, sunt? Modi ipsam quo voluptas.
        </p>

        <button className="consult-button">Request Consultation</button>
      </div>

      <div className="hero-right">
        <img
          src="/interior.jpg" 
          alt="Interior Design"
          className="hero-image"
        />
      </div>
    </div>
  );
}
