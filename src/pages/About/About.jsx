import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineThroughAnime from '../../components/LineThroughAnime';
import topFunction from '../../hooks/scrollToTop';

export default function About() {

    useEffect(() => {
        topFunction()
    }, [])
    return (
        <div className='text-white px-8 sm:px-28 lg:px-56 py-8' >
            <header className='text-8xl relative w-full' >
                <span className='ml-16' >03</span>
                <LineThroughAnime />
            </header>
            <div className='py-16' >
                <h1 className='text-5xl' >About <span className='text-accent-300' >Revelation Pictures</span>.</h1>
            </div>
            <div className='font-light text-gray-400'>
                <p>
                    Revelation Pictures Limited is an indigenous film production company assembled by
                    creative industry professionals who are passionate about producing thought-provoking
                    and universally acceptable movies that will entertain as well as educate.
                </p>
                <p className='text-sm mt-12 mb-4 text-white' >
                    <Link to='/talent'>
                        <span className='hover:text-accent-300' >VIEW OUR CREATIVE TALENT</span>
                    </Link>
                </p>
                <Link to='/talent'>
                    <ArrowRightAltIcon className='text-accent-300 hover:text-white transition-colors duration-300' />
                </Link>
                <p className='text-sm mt-12 mb-4 text-white' >
                    <Link to='/contact'>
                        <span className='hover:text-accent-300' >CONTACT US</span>
                    </Link>
                </p>
                <Link to='/contact'>
                    <ArrowRightAltIcon className='text-accent-300 hover:text-white transition-colors duration-300' />
                </Link>
            </div>
        </div>
    )
}