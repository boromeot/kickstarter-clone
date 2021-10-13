import UpdatesView from '../UpdatesView'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as updateActions from '../../store/update'
import './UpdatesComponent.css'


export default function UpdatesComponent({ id }) {
    const projectUpdates = useSelector(state => state.project.updates)
    const dispatch = useDispatch()
    let [reload, setReload] = useState(false);

    if (reload === true) {
        window.location.reload();
        reload = false
    }

    return (

        <div className="updates_outter_container">
            {projectUpdates?.map((updates, idx) =>
                <div className='updates_inner_container'>
                    <div className='updates_container'>
                        <div className='updateBtn_container'>
                            <li className="updateInfo btn-primary" onClick={() => {
                                dispatch(updateActions.deleteUpdate({ idx: updates.id }))
                                setReload(true)
                            }}>DELETE</li>
                        </div>
                        <li className='updateInfo updateNumber'>Update #{idx + 1}</li>
                        <li className='updateInfo projectTitle'>{updates.title}</li>
                        <li className='updateInfo projectOwner'>{updates.username}</li>
                        <li className='updateInfo projectDescription'>{updates.description}</li>

                    </div>

                </div>
            )}

            {/* <UpdatesView id={id} /> */}
        </div>
    )
}
