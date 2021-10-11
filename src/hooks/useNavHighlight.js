import { useEffect } from "react"
import { useHistory, useLocation } from "react-router"

export default function useNavHighlight() {

    const home = document.getElementsByClassName('home')
    const projects = document.getElementsByClassName('projects')
    const talent = document.getElementsByClassName('talent')
    const about = document.getElementsByClassName('about')
    const contact = document.getElementsByClassName('contact')
    const nav = document.getElementsByClassName('nav')

    const history = useHistory()
    const loadRoute = useLocation();

    const navSwith = (location) => {

        for (let i = 0; i < nav.length; i++) {
            nav[i].style.color = 'white'
        }

        switch (location.pathname) {
            case '/':
                for (let i = 0; i < home.length; i++) {
                    home[i].style.color = '#ff3c01'
                }
                break;

            case '/projects':
                for (let i = 0; i < projects.length; i++) {
                    projects[i].style.color = '#ff3c01'
                }
                break;

            case '/talent':
                for (let i = 0; i < talent.length; i++) {
                    talent[i].style.color = '#ff3c01'
                }
                break;

            case '/about':
                for (let i = 0; i < about.length; i++) {
                    about[i].style.color = '#ff3c01'
                }
                break;

            case '/contact':
                for (let i = 0; i < contact.length; i++) {
                    contact[i].style.color = '#ff3c01'
                }
                break;

            default:
                break;
        }
    }


    useEffect(() => {

        navSwith(loadRoute)

        history.listen(location => {

            navSwith(location)

        })
    }, [history])

}