import React from 'react';

const SelectedTechnology = ({selectedTechnology}) => {
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

         <div className="border border-dashed rounded-xl p-8 mt-5 text-center text-gray-400 flex">
       <img src={technology.icon} className='w-16 h-16 object-contain'/>
       <div>
       <h2 className='font-bold text-2xl'>{technology.name}</h2>
       <p>{technology.category}</p>
      </div>
      </div>
       })
     
  }
    </div>
    )
      
      
  } 
};

export default SelectedTechnology;