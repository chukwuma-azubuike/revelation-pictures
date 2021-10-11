import { Link } from "react-router-dom"
import useOpenClose from "../../hooks/OpenClose.hook"

export default function SideNav() {

    const { openCloseFunc, setOpen } = useOpenClose()

    const handleClick = () => {
        // setOpen(true)
        openCloseFunc('side-nav')
    }
    return (
        <nav id='side-nav' className='py-0 px-12 bg-black text-white h-screen absolute top-24 right-144 tablet:hidden w-screen transition-all duration-300 z-10' >
            <div>
                <ul className='text-4xl font-normal leading-normal text-center space-y-6'>
                    <Link to='/' >
                        <li onClick={handleClick} ><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >Home</span></li>
                    </Link>
                    <Link to='/projects' >
                        <li onClick={handleClick}><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >Our Projects</span></li>
                    </Link>
                    <Link to='/talent' >
                        <li onClick={handleClick}><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >Talent</span></li>
                    </Link>
                    <Link to='/about' >
                        <li onClick={handleClick}><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >About Us</span></li>
                    </Link>
                    <Link to='/contact' >
                        <li onClick={handleClick}><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >Contact Us</span></li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}