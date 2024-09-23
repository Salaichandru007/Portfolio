import React from 'react';
import './Skills.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Responsive design",
        description:
            "Ensuring that the website/mobile app is responsive across all platforms",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
            "Ensuring that that a website meets the correct standards, and also ensuring it's well maintained",
    },
    {
        id: 3,
        image: Image3,
        title: "Mobile Development",
        description:
            "Ensuring that a mobile app meets the correct standards, and also ensuring it's well maintained",
    },
];

const Skills = () => {
    return (
        <section className="skills container section" id="skills">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="skills__card" key={id}>
                            <img src={image} alt='' className='skills__img' width="80" />

                            <h3 className="skills__title">{title}</h3>
                            <p className="skills__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills