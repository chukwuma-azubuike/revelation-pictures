import { useEffect } from 'react'
import dadposter from '../../assets/Media/dadPoster.jpg'
import dadPoster2 from '../../assets/Media/dadPoster2.jpg'
import dadTrailer from '../../assets/Media/dadTrailer.mp4'
import useCarousel from '../../hooks/Carosel'

export default function Home() {

    const { currentSlide, slideFunc } = useCarousel()

    console.log(currentSlide)

    useEffect(() => {
        slideFunc('slides')
    })

    return (
        <div>
            <div className='absolute top-0 bg-black w-full h-screen bg-home-bg bg-no-repeat bg-cover filter blur-md' />
            <div className='absolute w-full top-36 flex text-center justify-center' >
                <div id={1} className='slides relative hidden' >
                    <img className='m-auto h-144 shadow-2xl' src={dadposter} />
                </div>
                <div id={2} className='slides relative hidden'>
                    <img className='m-auto h-144 shadow-2xl' src={dadPoster2} />
                </div>
                <div id={3} className='slides relative hidden'>
                    {/* <video className='m-auto h-144 shadow-2xl' src={dadTrailer} /> */}
                    <video autoplay loop controls>
                        <source src={dadTrailer} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
}