import React from 'react';

const SelectedTechnology = ({selectedTechnology}) => {
  console.log(selectedTechnology,'selectedTechnology')
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

    );
};

export default SelectedTechnology;