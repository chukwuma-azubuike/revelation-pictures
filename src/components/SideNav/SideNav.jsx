export default function SideNav() {
    return (
        <nav id='side-nav' className='py-0 px-12 bg-black text-white h-screen absolute right-144 tablet:hidden w-full transition-all duration-300' >
            <div>
                <ul className='font-semibold text-5xl leading-normal text-center'>
                    <li><span className='cursor-pointer hover:text-accent-300' >Home</span></li>
                    <li><span className='cursor-pointer hover:text-accent-300' >Our Projects</span></li>
                    <li><span className='cursor-pointer hover:text-accent-300' >Talent</span></li>
                    <li><span className='cursor-pointer hover:text-accent-300' >About Us</span></li>
                    <li><span className='cursor-pointer hover:text-accent-300' >Contact Us</span></li>
                </ul>
            </div>
        </nav>
    )
}