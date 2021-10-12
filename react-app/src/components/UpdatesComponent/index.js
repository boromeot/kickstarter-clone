import UpdatesView from '../UpdatesView'
import { useSelector } from 'react-redux'
import './UpdatesComponent.css'


export default function UpdatesComponent({ id }) {
    const projectUpdates = useSelector(state => state.project.updates)
    console.log(projectUpdates, "Project Updates!!!!!!!!!!!")
    return (

        <div className="updates_outter_container">
            {projectUpdates?.map((updates, idx) =>
                <div className='updates_inner_container'>
                    <li className='updateInfo updateNumber'>Update #{idx + 1}</li>
                    <li className='updateInfo projectTitle'>{updates.title}</li>
                    <li className='updateInfo projectOwner'>{updates.username}</li>
                    <li className='updateInfo projectDescription'>{updates.description}</li>

                </div>
            )}

            {/* <UpdatesView id={id} /> */}
        </div>
    )
}
