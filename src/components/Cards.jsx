import React from 'react'
import Github from '../assets/Github.png'

const Cards = ({ item }) => 
{
    return (
        <div className=" w-[350px] h-[450px] rounded-2xl overflow-hidden shadow-lg bg-white">
            <div className="overflow-hidden">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    {/* <button className='bg-red-500 text-white px-3 py-2 rounded-md'><a href={item.live} target='_blank'>Live Preview</a></button> */}
                    <button className='bg-black text-white px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' className='flex gap-1'>
                            <img src={Github} alt="" className='w-6'/>
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards

