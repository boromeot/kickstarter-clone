import UpdatesView from '../UpdatesView'
import { useSelector } from 'react-redux'
import './UpdatesComponent.css'


export default function UpdatesComponent({ id }) {
    const projectComments = useSelector(state => state.project.comments)
    console.log(projectComments)
    return (

        <div>


            {/* <UpdatesView id={id} /> */}
        </div>
    )
}