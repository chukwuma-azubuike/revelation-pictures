import { useEffect, useState } from "react"

export default function LineThroughAnime() {

    const [width, setWidth] = useState('0')

    useEffect(() => {
        setWidth('240px')
    }, [])

    return (
        <div
            style={{
                width: width,
                height: '10px',
                transition: 'all ease-in-out 0.7s',
                position: 'absolute',
                background: 'white',
                top:'40px'
            }}
        />
    )
}