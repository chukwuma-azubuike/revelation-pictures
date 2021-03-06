import topFunction from "../../hooks/scrollToTop"
import { useEffect } from "react"
import LineThroughAnime from '../../components/LineThroughAnime';


export default function ContactUs() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        topFunction()
    }, [])

    return (
        <div className='text-white px-8 sm:px-28 lg:px-56 py-8' >
            <header className='text-8xl relative' >
                <span className='ml-16' >04</span>
                <LineThroughAnime />
            </header>            <div className='py-16' >
                <h1 className='text-5xl' >Contact <span className='text-accent-300' >Revelation Pictures</span>.</h1>
            </div>
            <div className='font-light text-gray-400 text-md'>
                <div className='text-sm md:flex' >
                    <div className='md:border-r md:border-b-0 border-b border-accent-300 py-3 pr-6 mr-6' >
                        <p>We would love to hear from you!</p>
                    </div>
                    <div className='md:border-r border-b md:border-b-0 border-accent-300 py-3 pr-6 mt-3 md:mt-0'>
                        <p>TEL: <a className='hover:text-accent-300' href='tel:+2348037223516' >+234 803 722 3516</a></p>
                        <p>EMAIL: <a className='hover:text-accent-300' href='mailto:revelationpictures001@yahoo.com'>revelationpictures001@yahoo.com</a></p>
                    </div>
                </div>
                <div>
                    <form className='text-sm' onSubmit={handleSubmit}>
                        <div className='grid md:flex md:justify-between my-8 space-y-4' >
                            <input className='p-2 border-b border-white md:w-5/12 bg-black text-white placeholder-gray-400' placeholder='Name' type='text' />
                            <input className='p-2 border-b border-white md:w-5/12 bg-black text-white placeholder-gray-400' placeholder='Email' type='email' />
                        </div>
                        <textarea className='p-2 border-b border-white bg-black w-full text-white placeholder-gray-400' placeholder='Type your message here...' type='text' />
                        <div className='w-24 m-auto pt-4' >
                            <button type='submit' className='border-white border hover:text-accent-300 hover:border-accent-300 px-6 py-1 border-solid transition-colors duration-300' >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}