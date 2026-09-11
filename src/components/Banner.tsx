import React from 'react';
import BannerImg from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='container mx-auto flex justify-around items-center'>
            <div>
            <h1 className='text-7xl font-bold pt-24 pb-3'><span>Build Your Ideal</span><br/><span className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Development Stack</span></h1>
            <p className='mt-4 text-2xl'>Explore frontend, backend, database, and tooling options,<br/>
             compare them side by side, and put together the stack that fits your<br/>
             next project.</p>
             <div className='mt-7 flex gap-5'>
                <button className='rounded-md bg-gradient-to-r from-orange-500 to-pink-500 text-xs font-semibold px-3 py-2'>Explore Technologies</button>
                <button className='border border-gray-200 rounded-md px-7 py-2 text-xs'>Learn More</button>
             </div>
             </div>
             <div>
                <img src={BannerImg} alt=''/>
             </div>
        </div>
    );
};

export default Banner;