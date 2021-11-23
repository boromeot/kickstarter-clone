
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './SplashPageComponent.css'


export default function SplashNav() {
    const tags = useSelector(state => state.tags);
    return (
        <div className='grid-container'>
            <nav className='category-nav'>
                {tags?.map(tag => {
                    return <NavLink className='' to='#' key={tag.id}>{tag.title}</NavLink>
                })}
            </nav>
        </div>
    )
}
