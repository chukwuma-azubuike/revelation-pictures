import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <nav className='bg-black text-white md:px-9 lg:px-28 xl:px-52 box-border relative w-full'>
            <div className='text-6xl relative flex bottom-0 box-border pt-16 pb-8 xl:text-8xl'>
                <ul className='justify-between w-full md:flex'>
                    <Link to='/projects' >
                        <li id='projects' className='nav projects flex cursor-pointer items-center px-8 md:block hover:text-accent-300 transition-colors duration-300'>
                            <h1 className='my-3 mr-10'>01</h1>
                            <h1 className='font-thin text-base w-min' >ALL PROJECTS</h1>
                        </li>
                    </Link>
                    <Link to='/talent'>
                        <li id='talent' className='nav talent flex items-center px-8 md:block hover:text-accent-300 transition-colors duration-300'>
                            <h1 className='my-3 mr-10'>02</h1>
                            <h1 className='font-thin text-base w-min'>TALENT</h1>
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li id='about' className='nav about flex items-center px-8 md:block hover:text-accent-300 transition-colors duration-300'>
                            <h1 className='my-3 mr-10'>03</h1>
                            <h1 className='font-thin text-base w-min'>ABOUT US</h1>
                        </li>
                    </Link>
                    <Link to='/contact' >
                        <li id='contact' className='nav contact flex items-center px-8 md:block hover:text-accent-300 transition-colors duration-300'>
                            <h1 className='my-3 mr-10 md:mr-auto'>04</h1>
                            <h1 className='font-thin text-base w-min'>CONTACT INFO</h1>
                        </li>
                    </Link>
                </ul>
            </div>
            <p className='text-xs font-thin ml-8 mb-6 text-gray-400' >
                Revelation Pictures © {new Date().getFullYear()}. Built by Chukwuma Azubuike
            </p>
        </nav>
    )
}