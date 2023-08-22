import { Link } from 'gatsby';
import React from 'react';
import logo from './../assets/sample_logo.png'

const Header = ({ path }) => {
    console.log(path)
    return (
        <header className='sticky top-0 flex flex-col z-10 bg-white'>
            <div className='flex flex-row items-center my-2 px-4'>
                <img className='h-[100px] w-[100px]' src={logo} alt="logo"/>
                <div className=' text-center flex-auto justify-self-center'>
                    <div className='text-4xl font-bold'>Om Shanthi Theertham</div>
                    <div className='italic'>Mrtyor-Maa Amrtam Gamaya</div>
                </div>
                
            </div>
            <div className='bg-[#F49D01] py-4 px-8'>
                <nav className='flex flex-row justify-around font-semibold text-l'>
                    <Link className={path === '/' ? 'text-white' : ''} to='/'>About</Link>
                    <Link className={path === '/services' ? 'text-white' : ''} to='/services'>Services</Link>
                    <Link className={path === '/special' ? 'text-white' : ''} to='/special'>Special Services</Link>
                    <Link className={path === '/contact' ? 'text-white' : ''} to='/contact'>Contact Us</Link>
                    <Link className={path === '/faq' ? 'text-white' : ''} to='/faq'>FAQ</Link>
                </nav>
            </div>
            
        </header>
    );
};

export default Header;