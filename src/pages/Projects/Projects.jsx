import dadPoster from '../../assets/Media/dadPoster.jpg'
import dadPoster2 from '../../assets/Media/dadPoster2.jpg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import topFunction from '../../hooks/scrollToTop';
import { useEffect } from 'react';
import LineThroughAnime from '../../components/LineThroughAnime';
import dadTrailer from '../../assets/Media/dadTrailer.mp4'
import dadTrailer2 from '../../assets/Media/dadTrailer2.mp4'

export default function Projects() {

    const handleClick = (e) => {
        let id = e.target.id
        if (id === 'project1' || id === 'project1Arr') {
            document.getElementById('video1').style.display = 'block'
            setTimeout(() => {
                document.getElementById('video1').style.opacity = '1'
            }, 150)
        }
        if (id === 'project2' || id === 'project2Arr') {
            document.getElementById('video2').style.display = 'block'
            setTimeout(() => {
                document.getElementById('video2').style.opacity = '1'
            }, 150)
        }

        if (id === 'video1') {
            document.getElementById('dadTrailer').pause()
            document.getElementById('video1').style.opacity = '0'
            setTimeout(() => {
                document.getElementById('video1').style.display = 'none'
            }, 150)
        }
        if (id === 'video2') {
            document.getElementById('dadTrailer2').pause()
            document.getElementById('video2').style.opacity = '0'
            setTimeout(() => {
                document.getElementById('video2').style.display = 'none'
            }, 150)
        }
    }

    useEffect(() => {
        topFunction()
    }, [])

    return (
        <div>
            <div id='video1' onClick={handleClick} className='z-30 bg-gray-900 bg-opacity-70 fixed h-full w-full m-auto hidden opacity-0 transition-opacity' >
                <video id='dadTrailer' width='900' height='500' autoplay loop controls className='m-auto mt-20' onClick={handleClick}>
                    <source src={dadTrailer} type="video/mp4" />
                </video>
            </div>
            <div id='video2' onClick={handleClick} className='z-30 bg-gray-900 bg-opacity-70 fixed h-full w-full m-auto hidden opacity-0 transition-opacity' >
                <video id='dadTrailer2' width='900' height='500' autoplay loop controls className='m-auto mt-20' onClick={handleClick}>
                    <source src={dadTrailer2} type="video/mp4" />
                </video>
            </div>
            <div className='text-white px-8 sm:px-28 lg:px-32 py-8' >
                <header className='text-8xl relative' >
                    <span className='ml-16' >01</span>
                    <LineThroughAnime />
                </header>
                <div className='py-16' >
                    <h1 className='text-5xl' ><span className='text-accent-300' >Our Projects</span>.</h1>
                </div>
                <div className='font-light text-gray-400'>
                    <div className='lg:flex justify-between' >
                        <img id='project1' onClick={handleClick} src={dadPoster} alt='Happy Fathers day' className='w-2/3 m-auto lg:m-0 lg:w-2/5 cursor-pointer mb-10' />
                        <div className='lg:w-6/12' >
                            <p className='text-sm mb-4 flex' >
                                MOVIE TITLE: HAPPY FATHER’S DAY (2016)
                            </p>
                            <p className='text-sm mt-6 mb-4 flex items-center font-thin' >
                                DURATION: 70mins
                            </p>
                            <p className='text-sm mt-6 mb-4 flex items-center font-thin' >
                                DIRECTOR: Bukola Ogunsola
                            </p>
                            <p className='text-sm mt-6 mb-4 flex items-center font-thin' >
                                CAST: Mercy Aigbe, Wale Ojo, Simi Adejumo, Korede Oni, Tresor King
                            </p>
                            <p className='text-sm mt-6 mb-4 flex items-center font-thin' >
                                LOGLINE: A career driven husband never has time for his wife and children.
                                In a bid to teach him a lesson, his wife leaves him at home for a day with
                                his three children. Everything that could possibly go wrong went wrong but at the end,
                                he realizes that family truly is everything.
                            </p>
                            <p className='text-sm mb-4 text-white flex items-center font-thin' >
                                <span id='project1Arr' onClick={handleClick} className='hover:text-accent-300 cursor-pointer text-white transition-colors duration-300'>
                                    VIEW
                                    <KeyboardArrowRightIcon className='my-0' />
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
                <div className='font-light text-gray-400 mt-20 lg:mt-20'>
                    <div className='lg:flex justify-between' >
                        <img id='project2' onClick={handleClick} src={dadPoster2} alt='Happy Fathers day' className='w-2/3 m-auto lg:m-0 lg:w-2/5 cursor-pointer mb-10' />
                        <div className='lg:w-6/12' >
                            <p className='text-sm mb-4 flex' >
                                MOVIE TITLE: ANOTHER FATHER’S DAY (2019)
                            </p>
                            <p className='text-sm mt-6 mb-4 flex items-center font-thin' >
                                DURATION: 100 mins
                            </p>
                            <p className='text-sm mt-6 mb-4 flex items-center font-thin' >
                                DIRECTOR: Bukola Ogunsola
                            </p>
                            <p className='text-sm mt-6 mb-4 flex items-center font-thin' >
                                CAST: Mercy Aigbe, Wale Ojo, Simi Adejumo, Frank Donga , Cynthia Nwadiora ( Cee-C BBN),  Broda Shaggy,
                                Juliana Olayode, Mercy Chinwo,  SLK, Samuel Robinson, Tubosun Aiyedehin, Korede Oni, Tresor King                            </p>
                            <p className='text-sm mt-6 mb-4 flex items-center font-thin' >
                                LOGLINE: A career-driven man’s greatest phobia is babysitting his kids.  After one failed attempt,
                                he would do anything to make sure his wife never leaves him alone with his children.
                                Fresh drama however unfolds when on a weekend get-away, his wife goes missing and he’s left again to watch his children,
                                particularly his teenage daughter who suddenly develops a love interest.
                            </p>
                            <p className='text-sm mb-4 text-white flex items-center font-thin' >
                                <span id='project2Arr' onClick={handleClick} className='hover:text-accent-300 cursor-pointer text-white transition-colors duration-300'>
                                    VIEW
                                    <KeyboardArrowRightIcon className='my-0' />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}