import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function About() {
    return (
        <div className='text-white px-8 sm:px-28 lg:px-56 py-8' >
            <header className='text-8xl line-through line ' >03</header>
            <div className='py-16' >
                <h1 className='text-5xl' >About <span className='text-accent-300' >Revelation Pictures</span>.</h1>
            </div>
            <div className='font-light text-gray-400'>
                <p>
                    Revelation Pictures Limited is an indigenous film production company assembled by creative industry professionals who are passionate about producing thought-provoking and universally acceptable movies that will entertain as well as educate.
                </p>
                <p className='text-sm mt-12 mb-4 text-white' >VIEW OUR CREATIVE TALENT</p>
                <ArrowRightAltIcon className='text-accent-300 hover:text-white transition-colors duration-300' />
                <p className='text-sm mt-12 mb-4 text-white' >CONTACT US</p>
                <ArrowRightAltIcon className='text-accent-300 hover:text-white transition-colors duration-300' />
            </div>
        </div>
    )
}