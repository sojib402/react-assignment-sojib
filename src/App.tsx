
import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner'

import Navbar from './components/Navbar'
import Technology from './components/technology/Technology';
import type { Itechnology } from './types/technologyType';

const technologyFetch=async():Promise<Itechnology[]>=>{
const res=await fetch('/data.json');
const data=res.json();
return data;
}
function App() {
 const technologyPromise=technologyFetch()

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<h2>Loading........</h2>}>
        <Technology technologyPromise={technologyPromise}></Technology>
      </Suspense>
    </>
  )
}

export default App
