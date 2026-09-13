import { useState } from 'react';
import type { Itechnology } from '../types/technologyType';
import TechnologyCard from './TechnologyCard';
import SelectedTechnology from './SelectedTechnology';
import { toast } from 'react-toastify';

interface IAvailableTechnologyProps {
  technologys: Itechnology[];
}
const AvailableTechnology = ({technologys}:IAvailableTechnologyProps) => {
   const [selectedTechnology,setSelectedTechnology]= useState<Itechnology[]>([]);
   const handleAddToStack=(technology:Itechnology)=>{
    setSelectedTechnology((selectedTechnology)=>[...selectedTechnology,technology])
    toast.success(`${technology.name} added to stack`);
   }
   const handleRemove = (id: string) => {
    setSelectedTechnology((selectedTechnology) =>
      selectedTechnology.filter((technology) => technology.id !== id)
    );
    toast.success('One Technology removed to stack');
  };
  const handleRemoveAll = () => {
    setSelectedTechnology([]);
    toast.success('All Technology removed to stack');
  };

    
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
            <SelectedTechnology selectedTechnology={selectedTechnology} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll}></SelectedTechnology>
          </div>
        </div>
    );
};

export default AvailableTechnology;