import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                           Hello! I'm Chandiraguru T., and I'm based in Tamil Nadu, India. 
                           I am currently pursuing a BE degree in Electronics and Communication Engineering. 
                           I am passionate about technology and am on a journey to become a skilled Flutter developer.
                           Fast forward to today, and I am excited to be growing and improving every day as I work on real-world projects and internships.
                           My current focus is to enhance my skills in Flutter development, contributing to impactful projects and expanding my portfolio.
                        </p>
                        <ul className="about__list">
                            <li>Flutter & Dart</li>
                            <li>Firebase and SQL</li>
                            <li>Python</li>
                            <li>Git</li>
                            <li>RESTful API's</li>
                            <li>Java & Kotlin</li>
                            <li>Arduino</li>
                            <li>Robotics</li>
                            <li>Cisco</li>
                            <li>AI & ML</li>

                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload Resume</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About