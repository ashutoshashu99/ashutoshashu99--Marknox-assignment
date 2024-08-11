import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
    return (
        <div className="max-w-sm bg-white  rounded-lg shadow-md ">
            <h1></h1>
            <img className="rounded-3xl p-3  " src={image} alt={title} />
            <div className="p-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                <p className="mt-2 text-gray-700 ">{description}</p>
                <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center bg-blue-700rounded-lg hover:text-green-500 focus:ring-4   "> View Project</a>
            </div>
        </div>

    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Todo App',
            description: 'A simple todo application built with React Context concept which saves locally.',
            image: './src/assets/todo.png',
            link: 'https://todo-react-app-ke26.onrender.com',
        },
        {
            title: 'Landing Page',
            description: 'Landing page of a demo caompany built with Next.js, ShadCN and many other tools.',
            image: './src/assets/landing-page.png',
            link: 'https://filesure-assignment-vghi.vercel.app',
        },
        {
            title: 'Password Generator',
            description: 'Build with React adn tailwind to Generate strong and secure passwords.',
            image: './src/assets/password-generator.png',
            link: 'https://passwordgenerator-02f6.onrender.com/',
        },
        
    ];

    return (
        <div className='bg-slate-800'>
            
        <section className="container mx-auto py-12 ">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
                </div>
    );
};

export default Projects;