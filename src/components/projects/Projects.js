import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SCHOOL MANAGEMENT SYSTEM"
          des="An all-inclusive system designed for academic institutions. 
          This platform streamlines student enrollment, attendance tracking, 
          grade management, and communication between staff, teachers, and students."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="A fully responsive online store offering secure payment integration, 
          efficient inventory management, and an intuitive user interface that delivers
           a seamless shopping experience for customers."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="A real-time messaging application that supports one-to-one and group chats, 
          media sharing, and push notifications. Built with modern web technologies to enable 
          instantaneous communication."
          src={projectThree}
        />
        <ProjectsCard
          title="TRAVEL BOOKING APP"
          des="An intuitive travel platform that simplifies the search and booking of flights, 
          hotels, and tours. Emphasizing personalization, it offers users tailored travel 
          recommendations and streamlined booking processes."
          src={projectThree}
        />
        <ProjectsCard
          title="COLLEGE MANAGEMENT SYSTEM"
          des="A robust portal tailored for higher education institutions. 
          It facilitates course scheduling, faculty coordination, student information 
          management, and streamlines day-to-day administrative tasks."
          src={projectOne}
        />
        <ProjectsCard
          title="LMS SYSTEM"
          des="A feature-rich Learning Management System (LMS) designed to enhance
           online education. It offers interactive course 
           materials, real-time progress tracking, assessments, and comprehensive reporting 
           for educators."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects
