import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import bukky from '../../assets/bukolaOgunsola.jpg'

export default function Talent() {
    return (
        <div className='text-white px-8 sm:px-28 lg:px-56 py-8' >
            <header className='text-8xl line-through line ' >02</header>
            <div className='py-16' >
                <h1 className='text-5xl' ><span className='text-accent-300' >Our Creative Talent</span>.</h1>
            </div>
            <div className='font-light text-gray-400'>
                <div className='md:flex justify-between' >
                    <img src={bukky} alt='Bukola Ogunsola' className='w-62 h-72 mb-12 md:mb-0' />
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
                <p className='text-sm mt-24 mb-4 text-white' >CONTACT US</p>
                <ArrowRightAltIcon className='text-accent-300 hover:text-white transition-colors duration-300' />
            </div>
        </div>
    )
}