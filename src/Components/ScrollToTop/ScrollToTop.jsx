
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const elemento = document.getElementById(
                decodeURIComponent(hash.substring(1))
            )

            if (elemento) {
                elemento.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            })
        }
    }, [pathname, hash])

    return null
}

export default ScrollToTop
