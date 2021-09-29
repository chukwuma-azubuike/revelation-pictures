const { useState } = require("react")

export default function useCarousel() {

    const [currentSlide, setCurrentSlide] = useState(1)

    const slideFunc = (group) => {
        let slide = document.getElementsByClassName(group)
        if (currentSlide <= slide.length) {
            setTimeout(() => {
                for (let i = 0; i < slide.length; i++) {
                    slide[i].style.display = 'none'
                }
                setCurrentSlide(currentSlide + 1)
                console.log('current', currentSlide)
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
        slideFunc
    }
}