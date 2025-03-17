import React from 'react'
import employeeMSImage from '../assets/employee-ms.png'
import bookMSImage from '../assets/admin-dashboard.png'




const projects = [
    {
      id: 1,
      name: "Employee MS",
      technologies: "MERN Stack",
      image: employeeMSImage,
      github: "https://github.com/YouafKhan1",
    },
    {
      id: 2,
      name: "Blog App",
      technologies: "MERN Stack",
      image: bookMSImage,
      github: "https://github.com/YouafKhan1",
    },
    {
      id: 3,
      name: "Book MS",
      technologies: "MERN Stack",
      image: employeeMSImage,
      github: "https://github.com/YouafKhan1",
    },
  ];

const Project = () => {



  return (
    <div className='bg-black text-white py-20' id='projects'>
      <div className='container md:container mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(project => (
                <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                    <img className='rounded-lg mb-4' src={project.image} alt={project.name} />
                    <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' href="{project.github}"> Github </a>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Project
