
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './SplashPageComponent.css'


export default function SplashNav() {
    const tags = useSelector(state => state.tags);
    console.log('tags', tags);
    return (
        <div className='grid-container'>
            <nav>
                {console.log(tags)}
                {tags?.map(tag => {
                    return <div>{tag.name}</div>
                })}
            </nav>
        </div>
    )
}
