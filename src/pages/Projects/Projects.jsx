import dadPoster from '../../assets/Media/dadPoster.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import topFunction from '../../hooks/scrollToTop';
import { useEffect } from 'react';
import LineThroughAnime from '../../components/LineThroughAnime';
import dadTrailer from '../../assets/Media/dadTrailer.mp4'

export default function Projects() {

    const handleClick = (e) => {
        document.getElementById('project1').style.display = 'block'
        setTimeout(() => {
            document.getElementById('project1').style.opacity = '1'
        }, 150)
        if (e.target.id === 'project1') {
            document.getElementById('dadTrailer').pause()
            document.getElementById('project1').style.opacity = '0'
            setTimeout(() => {
                document.getElementById('project1').style.display = 'none'
            }, 150)
        }
    }

    useEffect(() => {
        topFunction()
    }, [])

    return (
        <div>
            <div id='project1' onClick={handleClick} className='z-30 bg-gray-900 bg-opacity-70 fixed h-full w-full m-auto hidden opacity-0 transition-opacity' >
                <video id='dadTrailer' width='900' height='500' autoplay loop controls className='m-auto mt-20' onClick={handleClick}>
                    <source src={dadTrailer} type="video/mp4" />
                </video>
            </div>
            <div className='text-white px-8 sm:px-28 lg:px-56 py-8' >
                <header className='text-8xl relative' >
                    <span className='ml-16' >01</span>
                    <LineThroughAnime />
                </header>            <div className='py-16' >
                    <h1 className='text-5xl' ><span className='text-accent-300' >Our Projects</span>.</h1>
                </div>
                <div className='font-light text-gray-400'>
                    <img src={dadPoster} alt='Happy Fathers day' className='w-2/3 m-auto lg:w-2/5' />
                    <p className='text-sm mt-12 mb-4 text-white flex items-center font-thin' >
                        <span onClick={handleClick} className='hover:text-accent-300 cursor-pointer text-white transition-colors duration-300'>
                            VIEW
                            <KeyboardArrowRightIcon className='my-0' />
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}