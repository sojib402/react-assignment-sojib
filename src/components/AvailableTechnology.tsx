import React, { useState } from 'react';
import type { Itechnology } from '../types/technologyType';
import TechnologyCard from './TechnologyCard';
import SelectedTechnology from './SelectedTechnology';

const AvailableTechnology = ({technologys}) => {
   const [selectedTechnology,setSelectedTechnology]=useState([])
   const handleAddToStack=(technology)=>{
    setSelectedTechnology((selectedTechnology)=>[...selectedTechnology,technology])

   }
    
    return (
        <div className='grid grid-cols-12 gap-4 container mx-auto'>
          <div className='col-span-9'>
             <div className='grid grid-cols-3 gap-6'>
            { 
           
          technologys.map((technology:Itechnology,ind:number)=>{
            
            return <TechnologyCard key={ind} technology={technology}  onClick={handleAddToStack}>
             
            </TechnologyCard>

          })
         
          }
           </div>
          </div>
          <div className='col-span-3'>
            <SelectedTechnology selectedTechnology={selectedTechnology}></SelectedTechnology>
          </div>
        </div>
    );
};

export default AvailableTechnology;