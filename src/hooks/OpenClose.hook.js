import { useEffect, useState } from "react"

export default function useOpenClose() {

    const [open, setOpen] = useState(false);

    const openCloseFunc = (id) => {
        setOpen(!open)
        if (!open) {
            document.getElementById(id).style.right = '0';
        } else if (open) {
            document.getElementById(id).style.right = '576px';
        }
    }

    return {
        openCloseFunc
    }
}