export default function Circle(props) {
    return (
        <div className='h-16 w-16 border-2 rounded-full bg-white justify-center flex hover:bg-gray-300 cursor-pointer' >
            <img className='w-6 text-white' src={props.info} />
        </div>
    )
}