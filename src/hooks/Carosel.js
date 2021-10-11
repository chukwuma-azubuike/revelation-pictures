const { useState } = require("react")

export default function useCarousel() {

    const [currentSlide, setCurrentSlide] = useState(1)
    const [slideState, setSlideState] = useState(true)

    const slideFunc = (group) => {

        if (!group) return
        let slide = document.getElementsByClassName(group)
        if (currentSlide <= slide.length) {
            setTimeout(() => {
                for (let i = 0; i < slide.length; i++) {
                    slide[i].style.display = 'none'
                }
                setCurrentSlide(currentSlide + 1)
                // console.log('current', currentSlide)
                if (document.getElementById(currentSlide))
                    document.getElementById(currentSlide).style.display = 'block'
            }, 2000)
        } else {
            setTimeout(() => {
                setCurrentSlide(1)
            }, 1000)
        }
    }

    return {
        currentSlide,
        slideState,
        setSlideState,
        slideFunc
    }
}