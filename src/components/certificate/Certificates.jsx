import React from 'react';
import './Certificates.css';

import git_udemy from '../../assets/git_udemy.jpg';
import ml_pantech from '../../assets/ml_pantech.png';
import workshop_vlsi from '../../assets/workshop_vlsi.png';
import grt_expo from '../../assets/grt_expo.png';
import polenza_internship from '../../assets/polenza_internship.jpg';
import node_red from '../../assets/node_red.png';
import ml_workshop from '../../assets/ml_workshop.png';
import technical from '../../assets/technical_quiz.png';
import industry_workshop from '../../assets/industry.png';
import edunet from '../../assets/edunet.png';
import codtech from '../../assets/codtech.png';



const Certificates = () => {
    return (
        <section className="certificates container section" id="certificates">
            <h2 className="section__title">My Certificates</h2>

            <div className="certificates__container grid">
                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Udemy</span></a>
                        <a href="#"><img src={git_udemy} alt="Udemy Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">Git</h3>
                        <div className="certificate__meta">
                            <span>Completed: September 1, 2024</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Internship</span></a>
                        <a href="#"><img src={ml_pantech} alt="Internship Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">Pantech ELearning</h3>
                        <div className="certificate__meta">
                            <span>Completed: August 14, 2024</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Workshop</span></a>
                        <a href="#"><img src={ml_workshop} alt="Workshop Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">Machine Learning Workshop</h3>
                        <div className="certificate__meta">
                            <span>Completed: April 8, 2024</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Workshop</span></a>
                        <a href="#"><img src={node_red} alt="Workshop Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">Embedded Realms, Cloud & Node Red</h3>
                        <div className="certificate__meta">
                            <span>Completed: October 9, 2023</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Workshop</span></a>
                        <a href="#"><img src={workshop_vlsi} alt="Workshop Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">VLSI Design Workshop</h3>
                        <div className="certificate__meta">
                            <span>Completed: April 29, 2023</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Internship</span></a>
                        <a href="#"><img src={polenza_internship} alt="Internship Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">Polenza Tech Solutions Internship</h3>
                        <div className="certificate__meta">
                            <span>Completed: January 22, 2024</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Symposium</span></a>
                        <a href="#"><img src={grt_expo} alt="Symposium Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">GRT EXPO'23</h3>
                        <div className="certificate__meta">
                            <span>Completed: September 27, 2023</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">APCE</span></a>
                        <a href="#"><img src={technical} alt="APCE Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">Technical Quiz</h3>
                        <div className="certificate__meta">
                            <span>Completed: November 4, 2023</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">APCE</span></a>
                        <a href="#"><img src={industry_workshop} alt="Seminar Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">Industry 4.0</h3>
                        <div className="certificate__meta">
                            <span>Completed: September 13, 2024</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Internship</span></a>
                        <a href="#"><img src={edunet} alt="Internship Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">Edunet Foundation</h3>
                        <div className="certificate__meta">
                            <span>Completed: July 1, 2024</span>
                        </div>
                    </div>
                </div>

                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Internship</span></a>
                        <a href="#"><img src={codtech} alt="Internship Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">CodTech IT Solutions</h3>
                        <div className="certificate__meta">
                            <span>Completed: August 15, 2024</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Certificates

