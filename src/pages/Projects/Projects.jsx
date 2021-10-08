import dadPoster from '../../assets/Media/dadPoster.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Projects() {
    return (
        <div className='text-white px-8 sm:px-28 lg:px-56 py-8' >
            <header className='text-8xl line-through line' >01</header>
            <div className='py-16' >
                <h1 className='text-5xl' ><span className='text-accent-300' >Our Projects</span>.</h1>
            </div>
            <div className='font-light text-gray-400'>
                <img src={dadPoster} alt='Happy Fathers day' className='w-2/3 m-auto lg:w-2/5' />
                <p className='text-sm mt-12 mb-4 text-white flex items-center font-thin' >
                    <span className='hover:text-accent-300 text-white transition-colors duration-300'>
                        VIEW
                        <KeyboardArrowRightIcon className='my-0' />
                    </span>
                </p>
            </div>
        </div>
    )
}