//import { useState } from "react";

import Navbar from "./Navbar";
import about from "../assets/about.png";
//import "../Media.css";
import video from "../assets/video.mp4";
import hero from "../assets/hero-right.png";
import Contactus from "./Contactus";
import Ourwork from "./Ourwork";

function Home() {
  return (
    <>
      <Navbar />
      <section id="hero" className="hero">
        <video autoPlay muted loop className="video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="division hero">
          <div className="hero-left">
            <div className="container left1">
              <h1>infol.</h1>
              <h3>From Brand to Infleuncers</h3>
              <h3>And Vise-Versa</h3>
              <h5>
                We build effective strategies which facilitates Creator's Growth
                & Brand's Business based upon growth driven ROI.
              </h5>
              <div className="div-btn">
                <button className="btn btn-outline-warning btn-primary mx-1">
                  Influencer
                </button>
                <button className="btn btn-outline-warning btn-primary">
                  Brand
                </button>
              </div>
            </div>
          </div>
          <div className="container right1 about">
            <img src={hero}></img>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="division">
          <div className="container left">
            <img src={about}></img>
          </div>

          <div className="container right about">
            <h3 className="text-center text-black">
              A full service influencer marketing agency
            </h3>
            <p className="text-center text-black">
              Our team develops effective content strategies for forward
              thinking companies. We have a proven track record in increasing
              brand awareness & ROI.
            </p>
            <div className="about-text">
              <div>
                <p>
                  {" "}
                  Our team of specialists consistently delivers outstanding
                  results combining creative ideas with our vast experience. We
                  can help you build a sustainable, meaningful relationship with
                  your clients by engaging them with your brand using social
                  media.
                </p>
              </div>
              <div>
                At Infol, we want to enable companies and influencers to
                grow their businesses and inspire their audiences through
                creative influencer campaigns. And we want to enable this
                efficiently, because nobody has time to waste.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ourwork id="work" />

      <Contactus id="contact" />
    </>
  );
}

export default Home;
