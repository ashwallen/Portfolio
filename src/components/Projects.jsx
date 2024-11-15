import React from 'react'
import School from '../assets/School.jpeg'
import Portfolio from '../assets/Portfolio.png'
import Todo from '../assets/Todo.jpeg'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'A responsive portfolio website built with React and Tailwind CSS. Features smooth scrolling, dynamic content rendering, and professional design.',
          image: Portfolio
        },
        {
          title: 'Study Infinity',
          desc: 'An educational platform developed using HTML and CSS. Implemented responsive design and interactive animations for seamless access across all devices.',
          image: School,
          github:'https://github.com/ashwallen/School-Website-HTML-CSS'
        },
        {
          title: 'Todo List',
          desc: 'A React-based Todo application utilizing Context API for state management and Local Storage for data persistence. Features task creation, deletion, and status updates with a clean, intuitive interface.',
          image: Todo,
          github:'https://github.com/ashwallen/REACT/tree/main/10todo'
        }
      ];
  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> 
            {
              return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
