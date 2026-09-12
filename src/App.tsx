
import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner'

import Navbar from './components/Navbar'
import Technology from './components/technology/Technology';
import type { Itechnology } from './types/technologyType';

const technologyFetch=async():Promise<Itechnology[]>=>{
const res=await fetch('/data.json');
const data= await res.json();
return data;
}
function App() {
 const technologyPromise=technologyFetch()

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <h1 className='text-5xl font-extrabold mb-4 container mx-auto'>Explore the <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h1>
      <p className='text-2xl mb-6 container mx-auto'>Pick one technology per category to build your ideal stack.</p>
      <Suspense fallback={<h2>Loading........</h2>}>
        <Technology technologyPromise={technologyPromise}></Technology>
      </Suspense>
      
    </>
  )
}

export default App
