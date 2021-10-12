import { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dadposter from '../../assets/Media/dadPoster.jpg'
import dadPosterTiny from '../../assets/Media/dadPosterTiny.jpg'
import dadPoster2 from '../../assets/Media/dadPoster2.jpg'
import dadPoster2Tiny from '../../assets/Media/dadPoster2Tiny.jpg'
import dadTrailer from '../../assets/Media/dadTrailer.mp4'
import useCarousel from '../../hooks/Carosel'
import topFunction from '../../hooks/scrollToTop'
import useProgressiveImg from '../../hooks/useProgressiveImage'

export default function Home() {

    const { setSlideState, slideFunc, slideState } = useCarousel()

    const [src1, { blur1 }] = useProgressiveImg(dadPosterTiny, dadposter)
    const [src2, { blur2 }] = useProgressiveImg(dadPoster2Tiny, dadPoster2)

    // useEffect(() => {
    //     slideState && slideFunc('slides')
    // })

    const handleClick = () => {
        setSlideState(!slideState)
        // slideFunc(!slideState)
    }

    useEffect(() => {
        topFunction()
    }, [])

    return (
        <div>
            <div className='py-12 px-3 text-5xl text-white md:m-auto md:w-max lg:mx-64' >
                <h1>This is</h1>
                <h1><span className='text-accent-300' >Revelation Pictures</span>.</h1>
            </div>
            <div className='top-36 flex text-center justify-center bg-black w-full md:w-96 lg:w-5/12 xl:w-4/12 2xl:w-3/12 m-auto' >
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={2500}
                    showThumbs={false}
                    useKeyboardArrows={true}
                    showStatus={false}
                >
                    <div id={1} className='slides' onClick={handleClick}>
                        <img
                            className='m-auto h-144 shadow-2xl sm:h-144 sm:w-96 phonemax:w-72 phonemax:h-128'
                            src={src1}
                            style={{
                                filter: blur1 ? "blur(20px)" : "none",
                                transition: blur1 ? "none" : "filter 0.3s ease-out"
                            }}
                        />
                    </div>
                    <div id={2} className='slides' onClick={handleClick}>
                        <img className='m-auto h-144 shadow-2xl sm:h-144 sm:w-96 phonemax:w-72  phonemax:h-128'
                            src={src2}
                            style={{
                                filter: blur2 ? "blur(20px)" : "none",
                                transition: blur2 ? "none" : "filter 0.3s ease-out"
                            }}
                        />
                    </div>
                    {/* <div id={3} className='slides' name='video'>
                        <video autoPlay loop controls className='h-144' onClick={handleClick}>
                            <source src={dadTrailer} type="video/mp4" />
                        </video>
                    </div> */}
                </Carousel>
            </div>
        </div>
    )
}