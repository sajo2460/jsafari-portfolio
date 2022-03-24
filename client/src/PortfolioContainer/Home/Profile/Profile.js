import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a target="_blank" href="https://www.linkedin.com/in/josephsafari/">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Joseph SAFARI</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full stack Developer 💻",
                                        4000,
                                        "JavaScript | TypeScript Developer",
                                        4000,
                                        'Angular Developer',
                                        4000,
                                        "Mern stack Dev 📱",
                                        4000,
                                        "Cross Platform Dev 🔴",
                                        4000,
                                        "React | React Native 🌐",
                                        4000,
                                    ]}
                                />
                            </h1>
                        </span>
                        <span className="profile-role-tagline">
                            Design, Prototype and Build Applications with Front and Back End Technologies.
                        </span>
                    </div>

                    <div className="profile-options">
                        {/* <button className="btn primary-btn" 
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> 
                            Contact Me 
                        </button> */}
                        <a href="resume.pdf" download="Joseph-Safari resume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
            </div>
        </div>
    );
}