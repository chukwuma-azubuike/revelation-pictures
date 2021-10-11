import logo from '../../assets/logo-white.jpg';
import OpenClose from '../OpenClose/OpenClose';
import useOpenClose from '../../hooks/OpenClose.hook';
import { Link } from 'react-router-dom';
import useNavHighlight from '../../hooks/useNavHighlight';

export default function TopNav() {

    const { openCloseFunc } = useOpenClose()

    const handleOpenClose = () => {
        openCloseFunc('side-nav')
    }

    useNavHighlight()

    return (
        <nav className='py-2 lgmax:px-6 md:px-12 flex justify-between bg-black text-white sticky top-0 items-center z-20' >
            <img className='sm:w-24 phone:w-20' src={logo} />
            <OpenClose onClick={handleOpenClose} className='phone:block sm:hidden tablet:hidden absolute right-16 top-7 z-20' />
            <div className='phone:hidden tablet:block' >
                <ul className='flex space-x-4 sm:text-xl lg:text-2xl lg:space-x-10 font-thin' >
                    <Link to='/' >
                        <li className='nav home cursor-pointer hover:text-accent-300 transition-colors duration-300' >Home</li>
                    </Link>
                    <Link to='/projects' >
                        <li className='nav projects cursor-pointer hover:text-accent-300 transition-colors duration-300' >Our Projects</li>
                    </Link>
                    <Link to='/talent' >
                        <li className='nav talent cursor-pointer hover:text-accent-300 transition-colors duration-300' >Talent</li>
                    </Link>
                    <Link to='/about' >
                        <li className='nav about cursor-pointer hover:text-accent-300 transition-colors duration-300' >About Us</li>
                    </Link>
                    <Link to='/contact' >
                        <li className='nav contact cursor-pointer hover:text-accent-300 transition-colors duration-300' >Contact Us</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}