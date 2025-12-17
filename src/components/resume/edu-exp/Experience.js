import React from 'react'
import { PortfolioHead, TimeLine } from '../../public-component'

const Experience = () => {
    const education = [
        {
            yearIn: "2023",
            yearOut: "Present",
            designation: "MERN Stack Developer",
            description: "Working on scalable e-commerce and SaaS applications using React, Next.js, Node.js, MongoDB, and Redux. Focused on performance, clean architecture, and user-centric design."
        },
        {
            yearIn: "2022",
            yearOut: "Present",
            designation: "React Js Developer",
            description: "Specialized in building responsive UIs using React, Redux, and Tailwind CSS. Implemented authentication flows, dashboards, search & filter features, and API integrations."
        },
       
    ];
    return (
        <div className='col-sm-12 col-md-6 col-lg-6'>
            <PortfolioHead heading="Experience" />
            {
                education.map((item, index) =>
                    <TimeLine key={index} yearIn={item.yearIn} yearOut={item.yearOut} designation={item.designation} description={item.description}/>
                )
            }
        </div>
    )
}

export default Experience