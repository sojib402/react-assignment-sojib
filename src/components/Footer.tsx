import React from 'react';
import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <div className='container mx-auto'>
        <div className='flex justify-between pt-[64px] pb-[64px] mt-6'>
            <div className='flex flex-col gap-4'>
          <img src={Logo} className="w-36"/>
          <p>Curated tools, technologies, and resources for developers building<br/>
           modern software.</p>
           <div className='flex justify-between items-center font-semibold text-2xl'>
            <a href=''>GitHub</a>
            <a href=''>Twitter</a>
            <a href=''>LinkedIn</a>
           </div>
            </div>
            <div className='flex flex-col gap-4'>
                <a className='text-2xl font-bold' href="">PRODUCT</a>
                <a href="">Home</a>
                <a href="">Technologies</a>
                <a href="">Projects</a>
            </div>
            
         <div className='flex flex-col gap-4'>
                <a className='text-2xl font-bold' href="">COMPANY</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Careers</a>
            </div>
            <div className='flex flex-col gap-4'>
                <a className='text-2xl font-bold' href="">LEGAL</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
            </div>
            </div>
            <div className='flex justify-between items-center border-t border-gray-200'>
        <div className=" pt-6 pb-6 flex justify-between items-center">
        <p className="text-sm text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
        </div>
        <div className='flex gap-6'>
            <a href=''>Privacy</a>
            <a href=''>Terms</a>
        </div>
        </div>
        </div>
    );
};

export default Footer;