export default function SideNav() {
    return (
        <nav id='side-nav' className='py-0 px-12 bg-black text-white h-screen absolute top-24 right-144 tablet:hidden w-screen transition-all duration-300 z-10' >
            <div>
                <ul className='text-4xl font-normal leading-normal text-center space-y-6'>
                    <li><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >Home</span></li>
                    <li><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >Our Projects</span></li>
                    <li><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >Talent</span></li>
                    <li><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >About Us</span></li>
                    <li><span className='cursor-pointer hover:text-accent-300 transition-colors duration-300' >Contact Us</span></li>
                </ul>
            </div>
        </nav>
    )
}