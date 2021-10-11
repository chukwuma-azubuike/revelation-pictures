import { useEffect, useState } from "react"

export default function useOpenClose() {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        // openCloseFunc('side-nav')
    }, [open])

    const openCloseFunc = (id) => {
        setOpen(!open)
        if (!open) {
            document.getElementById(id).style.right = '0';
            setTimeout(() => {
                document.getElementById(id).style.position = 'sticky';
            }, 150)
        } else if (open) {
            document.getElementById(id).style.position = 'absolute';
            document.getElementById(id).style.right = '576px';
        }
    }

    return {
        openCloseFunc,
        setOpen
    }
}