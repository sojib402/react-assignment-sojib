import React from 'react';
import { FaXmark } from 'react-icons/fa6';
import type { Itechnology } from '../types/technologyType';

interface ISelectedTechnologyProps {
  selectedTechnology: Itechnology[];
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}
const SelectedTechnology = ({selectedTechnology,handleRemove,handleRemoveAll}:ISelectedTechnologyProps) => {
  console.log(selectedTechnology,'selectedTechnology')
   if (selectedTechnology.length===0){
    return (
    <div className="w-80 border rounded-xl p-5">
      
      <h2 className="text-xl font-bold">
        Your Stack 
      </h2>
    
      <p className="text-gray-400">
        No technologies selected yet.
      </p>

      <div className="border border-dashed rounded-xl p-8 mt-5 text-center text-gray-400">
        Your stack is empty.
      </div>
  
    </div>
    )
      }
      else{
return (
    <div className="w-80 border rounded-xl p-5">
      
      <h2 className="text-xl font-bold">
        Your Stack {selectedTechnology.length}
      </h2>
    
      <p className="text-gray-400">
        {selectedTechnology.length} technologies selected 
      </p>
       { 
       selectedTechnology.map((technology)=>{
        return( 
          
         <div className="border border-dashed rounded-xl p-8 mt-5 text-center text-gray-400 flex justify-between items-center">
          <div>
       <img src={technology.icon} className='w-16 h-16 object-contain'/>
       <div>
       <h2 className='font-bold text-2xl text-black'>{technology.name}</h2>
       <p>{technology.category}</p>
      </div>
       </div>
       <button
         onClick={() => handleRemove(technology.id)}
              className="text-2xl text-gray-400"
            >
              <FaXmark />
            </button>
      

      </div>
      
      )
       })
     
  }
  <button
        onClick={handleRemoveAll}
        className="w-full border border-red-400 text-red-500 rounded-xl py-3 mt-8 font-bold"
      >
        Remove All
      </button>
    </div>
    
    )
      
      
  } 
};

export default SelectedTechnology;