import UpdatesView from '../UpdatesView'
import { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom';
import * as updateActions from '../../store/update'

import './UpdatesComponent.css'


export default function UpdatesComponent({ id, setCurrentUpdateId, setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId }) {
    const projectUpdates = useSelector(state => state.project.updates)
    const projectId = useSelector(state => state.project.id)
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
            {projectUpdates?.map((update, idx) =>
                <div key={update.id} className='updates_inner_container'>
                    <div className='updates_container'>
                        <div className='updateBtn_container'>
                            <li className="updateInfo btn-primary" onClick={() => {
                                setCurrentUpdateId(update.id)
                                setToRenderComponent(false)
                                setToRenderDisplay(true)
                                setToRenderPatch(false)
                                setReload(true)
                            }}>
                                READ MORE
                            </li>
                            <li className="updateInfo btn-primary" onClick={() => {
                                dispatch(updateActions.deleteUpdate({ idx: update.id }))
                                setReload(true)
                            }}>
                                DELETE
                            </li>
                        </div>
                        <li className='updateInfo updateNumber'>Update #{idx + 1}</li>
                        <li className='updateInfo projectTitle'>{update.title}</li>
                        <li className='updateInfo projectOwner'>{update.username}</li>
                        <li className='updateInfo projectDescription'>{update.description}</li>

                    </div>

                </div>
            )}

            {/* <UpdatesView id={id} /> */}
        </div>
    )
}
