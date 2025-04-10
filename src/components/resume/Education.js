import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

// renamed the component to Education
// This component displays education and job experience in two sections: Education Quality and Job Experience.
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2016</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor  In Education"
            subTitle="University of Garissa (2021 - 2024)"
            result="7.30/10"
            des="Throughout my Bachelor in Education(B.Ed Business & History) at the University of Garissa, 
            I built a robust foundation in educational theories, curriculum design, and effective classroom management.
             The program combined rigorous academic coursework with practical teaching experiences, enabling me to develop 
             innovative instructional strategies and a passion for fostering inclusive learning environments."
          />
          <ResumeCard
            title="MERN Stack-Software Engineer"
            subTitle="PLP Academy (2024 - 2025)"
            result="7.25/10"
            des="At PLP Academy,I immersed myself in the full spectrum of modern web development through an intensive 
            MERN stack program. The curriculum emphasized hands-on learning in MongoDB, Express, React, and Node.js,
             equipping me with the skills to build scalable, high-performance web applications. Through collaborative projects, 
             real-world case studies, and continuous exposure to industry best practices, I honed my ability to design 
             robust back-end systems, create interactive front-end interfaces, and integrate seamless API solutions,
              all while maintaining best practices in code quality and software development."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="St. Martins Maikuu Secondary School (2017 - 2020)"
            result="6.2/10"
            des="My secondary school education at St. Martins Maikuu Secondary School provided me with a solid foundation in various subjects,
            fostering critical thinking and analytical skills. The curriculum emphasized a well-rounded approach to learning,
            encouraging participation in extracurricular activities and community service. This holistic education experience not only prepared me for academic pursuits,
            but also instilled values of discipline, teamwork, and leadership. The supportive environment and dedicated faculty played a crucial role in shaping my character and aspirations."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intern secondary teacher"
            subTitle="St. Martins Maikuu"
            result="KENYA"
            des="Interned at St. Martins Maikuu, gaining experience in classroom management and lesson planning."
          />
           <ResumeCard
            title="Web Developer & Trainer"
            subTitle="PLP Academy (2024 - 2025)"
            result="KENYA"
            des="As a Web Developer & Trainer at PLP Academy, I honed my skills in web development and training methodologies."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="KENYA"
            des="As a Front-end Developer at Nike, I contributed to the design and development of user-friendly interfaces for their e-commerce platform."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
