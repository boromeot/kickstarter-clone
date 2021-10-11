import UpdatesView from '../UpdatesView'
import { useSelector } from 'react-redux'
import './UpdatesComponent.css'


export default function UpdatesComponent({ id }) {
    const project = useSelector(state => state.project)
    return (

        <div>


            {/* <UpdatesView id={id} /> */}
        </div>
    )
}
