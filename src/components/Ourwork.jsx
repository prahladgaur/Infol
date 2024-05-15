//import React from "react";
import "../css/Ourwork.css";
import content from "../assets/content.png";
import telent from "../assets/talent.png";
import marketing from "../assets/marketing.png";
import wedo from "../assets/wedo.png";

function Ourwork() {
  return (
    <>
      <section className="work">
        <div className="division">
          <div className="our-work">
            <div className="Card">
              <img src={content}></img>
              <p className="mx-2 text-center">CONTENT CREATOR'S COMMUNITY</p>
              <p className=" text-center mx-3 text-white">
                Building India's first Creator Centric Influencer Marketing
                Agency with Creator's Community, creators which are fueling up
                each other's growth.
              </p>
            </div>

            <div className="Card">
              <img src={telent}></img>
              <p className="mx-2 text-center">TALENT MANAGEMENT & GROOMING</p>
              <p className=" text-center mx-3 text-white">
                Our team is continuously scouting for fresh talents, which are
                then handpicked by the management. We know how to add gram
                (weightage) to their profiles.
              </p>
            </div>

            <div className="Card">
              <img src={marketing}></img>
              <p className="mx-2 text-center ">CONSULTING & WORKSHOPS</p>
              <p className=" text-center mx-3 text-white">
                We train your social media team and develop individual
                strategies in our workshops with which we take your social media
                activities to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="work">
        <div className="division">
          <div className="container left">
            <div className="wedo-left">
              <h5>WHAT MAKES US STAND APART?</h5>
              <h3> WHAT WE DO?</h3>
              <p >       
                Being a collective power we help brands to run campaigns on
                digital platforms, introduce techniques to market products,
                content writing and content creation. Our major focus is to
                provide exposure to brands through the best and trending content
                creators on leading digital platforms like Instagram, Facebook,
                YouTube, Twitter & other short video platforms.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="wedo-right">
              <img src={wedo}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourwork;
