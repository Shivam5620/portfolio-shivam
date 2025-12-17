import React from 'react'
import { PortfolioHead, TimeLine } from '../../public-component'

const Eduction = () => {
    const education = [
        {
            yearIn: "2019",
            yearOut: "2023",
            university: "Sage University ,Indore",
            subject: "Bachelor of Engineering / Technology (Computer Science)",
            description: "Completed BE/BTech with a strong foundation in software engineering, data structures, and web technologies. Gained hands-on experience through academic and real-world projects."
        },
        {
            yearIn: "2018",
            university: "Sitadevi Multipurpose HS School, Madhya Pradesh Board",
            subject: "Higher Secondary Education (12th)",
            description: "Studied Physics, Chemistry, and Mathematics with a focus on logical reasoning and analytical problem-solving. Achieved solid academic results and developed a keen interest in technology."
        },
        {
            yearIn: "2016",
            university: "SRGBN, Bedia || Madhya Pradesh Board",
            subject: "Secondary Education (10th)",
            description: "Built a strong academic base with emphasis on mathematics and computer fundamentals."
        },
    ];
    return (
        <div className='col-sm-12 col-md-6 col-lg-6'>
            <PortfolioHead heading="Eductions" />
            {
                education.map((item, index) =>
                    <TimeLine key={index} yearIn={item.yearIn} yearOut={item.yearOut} university={item.university} subject={item.subject} description={item.description}/>
                )
            }

        </div>
    )
}

export default Eduction