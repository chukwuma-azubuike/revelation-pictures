export default function Button(props) {
    return (
        <button className='bg-accent-400 px-10 py-2 shadow-lg mt-6 hover:bg-accent-100' >
            {props.text}
        </button>
    )
}