import React from 'react';
import type { Itechnology } from '../types/technologyType';
import { FaStar } from "react-icons/fa";

const AvailableTechnology = ({technologys}) => {
    console.log(technologys,'Avaiable Technology')
    return (
        <div className='grid grid-cols-12 gap-4 container mx-auto'>
          <div className='col-span-9'>
             <div className='grid grid-cols-3 gap-6'>
            { 
           
          technologys.map((technology:Itechnology)=>{
            
            return <div className="card bg-base-100 w-96 shadow-sm mt-5">
    <div className='flex justify-around items-center'>
  <figure>
   
    <img
      src={technology.icon} className='w-16 h-16 object-contain'
       />
       
  </figure>
  <button className='bg-blue-50 text-blue-500 border border-blue-200 px-4 py-2 rounded-full'>{technology.badge}</button>
   </div>
  <div className="card-body">
    <h2 className="card-title mt-10 mb-10">{technology.name}</h2>
    <p className='mb-8'>{technology.description}</p>
    <div className='flex justify-between items-center gap-4'>
        <button className='bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-lg'>{technology.category}</button>
        <a href='' className='text-lg text-gray-500'>{technology.difficulty}</a>
        <p className="flex items-center gap-2 text-lg text-gray-700"><FaStar className="text-yellow-400" />{technology.rating}</p>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary w-full rounded-xl text-xl h-16 bg-black text-white mb-5">Add to Stack</button>
    </div>
  </div>
</div>

          })
         
          }
           </div>
          </div>
          <div className='col-span-3 bg-red-600 h-[700px]'>

          </div>
        </div>
    );
};

export default AvailableTechnology;