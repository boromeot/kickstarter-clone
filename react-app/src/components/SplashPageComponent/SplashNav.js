
import { NavLink } from 'react-router-dom'
import './SplashPageComponent.css'


export default function SplashNav() {
    return (
        <nav className="splashNav_container">
            <NavLink className="splashNav" to={'/'}>
                Arts
            </NavLink>
            <NavLink className="splashNav" to={'/'}>
                {'Comics & Illustration'}
            </NavLink>
            <NavLink className="splashNav" to={'/'}>
                {'Design & Tech'}
            </NavLink>
            <NavLink className="splashNav" to={'/'}>
                Film
            </NavLink>
            <NavLink className="splashNav" to={'/'}>
                {'Food & Craft'}
            </NavLink>
            <NavLink className="splashNav" to={'/'}>
                Games
            </NavLink>
            <NavLink className="splashNav" to={'/'}>
                Music
            </NavLink>
            <NavLink className="splashNav" to={'/'}>
                Publishing
            </NavLink>
        </nav>
    )
}