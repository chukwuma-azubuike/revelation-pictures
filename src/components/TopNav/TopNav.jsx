import { useState } from 'react';
import logo from '../../assets/logo-white.jpg';
import OpenClose from '../OpenClose/OpenClose';
import useOpenClose from '../../hooks/OpenClose.hook';

export default function TopNav() {

    const { openCloseFunc } = useOpenClose()

    const [open, setOpen] = useState(false);

    const handleOpenClose = () => {
        openCloseFunc('side-nav')
    }

    return (
        <nav className='py-2 phone:px-6 sm:px-12 flex justify-between bg-black text-white sticky top-0 items-center' >
            <img className='sm:w-24 phone:w-20' src={logo} />
            <OpenClose onClick={handleOpenClose} className='phone:block sm:hidden tablet:hidden absolute right-16 top-7 z-10' />
            <div className='phone:hidden tablet:block' >
                <ul className='font-semibold lg:text-2xl flex tablet:space-x-5 tablet:text-base md:text-xl md:space-x-28' >
                    <li className='cursor-pointer hover:text-accent-300' >Home</li>
                    <li className='cursor-pointer hover:text-accent-300' >Our Projects</li>
                    <li className='cursor-pointer hover:text-accent-300' >Talent</li>
                    <li className='cursor-pointer hover:text-accent-300' >About Us</li>
                    <li className='cursor-pointer hover:text-accent-300' >Contact Us</li>
                </ul>
            </div>
        </nav>
    )
}