import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const Landing_Page = () => {
  return (
    <section className="hero-section bgimg">
        <div>
            <div data-aos="fade-up" className="flex-hero">

                <h1>
                    Your Health<br />
                    <span className="text-gradient">

                        Our Responsibility
                    </span>
                </h1>
                <div className="blob-cont">
                    <div className="blue blob"></div>
                </div>

                <h4>
                    We have good doctors available and ready to help you whenever you need. <br/>
                    Click the button below to get started.
                </h4>
                <a href="#services">
                    <button className="button">Get Started</button>
                </a>

            </div>

        </div>
    </section>

  );
};
export default Landing_Page