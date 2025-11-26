// import React from "react";
import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";

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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnivoluptatem modi commodi quasi iure! Eveniet, sunt? Modi ipsam quovoluptas.
        </p>

        <button className="consult-button">Request Consultation</button>
      </div>
    </div>
  );
}
