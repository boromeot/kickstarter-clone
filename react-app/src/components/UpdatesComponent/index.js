import UpdatesView from '../UpdatesView'
import { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as updateActions from '../../store/update'

import './UpdatesComponent.css'


export default function UpdatesComponent({ id, setCurrentUpdateId, setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId }) {
    const projectUpdates = useSelector(state => state.project.updates)
    const dispatch = useDispatch()

    // if (reload === true) {
    //     window.location.reload();
    //     reload = false
    // }
    let [reload, setReload] = useState(false);


    useEffect(() => {

        setReload(false)

    }, [dispatch, reload])


    return (

        <div className="updates_outter_container">
            {projectUpdates?.map((updates, idx) =>
                <div key={updates.id} className='updates_inner_container'>
                    <div className='updates_container'>
                        <div className='updateBtn_container'>
                            <li className="updateInfo btn-primary" onClick={() => {
                                setCurrentUpdateId(updates.id)
                                setToRenderComponent(false)
                                setToRenderDisplay(true)
                                setToRenderPatch(false)
                                setReload(true)
                            }}>READ MORE</li>
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
