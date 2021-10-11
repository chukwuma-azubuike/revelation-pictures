import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import bukky from '../../assets/bukolaOgunsola.jpg'
import bukkyTiny from '../../assets/bukolaOgunsolaTiny.jpg'
import topFunction from '../../hooks/scrollToTop';
import { useEffect } from 'react';
import LineThroughAnime from '../../components/LineThroughAnime';
import useProgressiveImg from '../../hooks/useProgressiveImage';
import { Link } from 'react-router-dom';

export default function Talent() {

    const [src, { blur }] = useProgressiveImg(bukkyTiny, bukky);

    useEffect(() => {
        topFunction()
    }, [])

    return (
        <div className='text-white px-8 sm:px-28 lg:px-56 py-8' >
            <header className='text-8xl relative' >
                <span className='ml-16' >02</span>
                <LineThroughAnime />
            </header>            <div className='py-16' >
                <h1 className='text-5xl' ><span className='text-accent-300' >Our Creative Talent</span>.</h1>
            </div>
            <div className='font-light text-gray-400'>
                <div className='md:flex justify-between' >
                    <img
                        src={src}
                        style={{
                            width: 200,
                            filter: blur ? "blur(20px)" : "none",
                            transition: blur ? "none" : "filter 0.3s ease-out"
                        }}
                        alt='Bukola Ogunsola'
                        className='w-62 h-72 mb-12 md:mb-0'

                    />
                    <div className='md:w-1/2' >
                        <h3 className='mb-12' ><span className='creative text-lg text-white leading-relaxed' >BUKOLA OGUNSOLA</span></h3>
                        <p className='text-sm mb-4' >
                            Bukola Ogunsola graduated from the Prestigious New York Film Academy,
                            New York, where she studied filmmaking.
                        </p>
                        <p className='text-sm mb-4'>
                            She has attended several other
                            film schools such as London Film Academy (where she studied Screenwriting and Film Production),
                            Met Film School London (where she took a short course on Filmmaking), and London Film School
                            (where she took a course on Directing Actors).
                        </p>
                        <p className='text-sm'>
                            Bukola is passionate about showcasing Nollywood
                            to the world through intriguing stories and top-notch production.
                        </p>
                    </div>
                </div>
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