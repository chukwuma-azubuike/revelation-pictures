import { useEffect } from 'react'
import dadposter from '../../assets/Media/dadPoster.jpg'
import dadPoster2 from '../../assets/Media/dadPoster2.jpg'
import dadTrailer from '../../assets/Media/dadTrailer.mp4'
import useCarousel from '../../hooks/Carosel'

export default function Home() {

    const { setSlideState, slideFunc, slideState } = useCarousel()

    useEffect(() => {
        slideState && slideFunc('slides')
    })

    const handleClick = () => {
        setSlideState(!slideState)
        // slideFunc(!slideState)
    }

    return (
        <div>
            {/* <div className='absolute top-0 bg-black w-full h-screen bg-home-bg bg-no-repeat bg-cover filter blur-md' /> */}
            <div className='w-full top-36 flex text-center justify-center hv1/2 bg-black' >
                <div id={1} className='slides relative hidden' onClick={handleClick}>
                    <img className='m-auto h-144 shadow-2xl sm:h-144 sm:w-96 phonemax:w-72  phonemax:h-128' src={dadposter} />
                </div>
                <div id={2} className='slides relative hidden' onClick={handleClick}>
                    <img className='m-auto h-144 shadow-2xl sm:h-144 sm:w-96 phonemax:w-72  phonemax:h-128' src={dadPoster2} />
                </div>
                <div id={3} className='slides relative hidden' name='video'>
                    {/* <video className='m-auto h-144 shadow-2xl' src={dadTrailer} /> */}
                    <video autoplay loop controls className='h-144' onClick={handleClick}>
                        <source src={dadTrailer} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}