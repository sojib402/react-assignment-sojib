import React from 'react';
import Logo from '../assets/logo-text.png'
const Navbar = () => {
    return (
        <div className='container mx-auto'>
        <div className='flex justify-between items-center gap-4 py-7'>
            <img src={Logo} alt=''/>
             
             <div className='flex justify-between items-center gap-4'>
                <ul>
                    <a className='font-semibold text-[#DB2777]' href=''>Home</a>
                </ul>
                <ul>
                    <a href=''>Technologies</a>
                </ul>
                <ul>
                    <a href=''>Projects</a>
                </ul>
                <ul>
                    <a href=''>About</a>
                </ul>
                <ul>
                    <a href=''>Contact</a>
                </ul>
             </div>
             <div className='flex gap-5 items-center'>
                <a href=''>Sign In</a>
                <button className='bg-pink-600 text-white px-6 py-2 rounded-full font-medium'>Sign Up</button>
             </div>
        </div>
        </div>
        
    );
};

export default Navbar;