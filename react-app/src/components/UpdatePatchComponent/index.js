import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as updateActions from '../../store/update'

import './UpdatePatchComponent.css';

export default function UpdatePatchComponent({ setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId }) {

    const dispatch = useDispatch()


    const currentUser = useSelector(state => state.session.user.id)
    const currentProject = useSelector(state => state.project.id)
    // console.log(currentProject)
    const updates = useSelector(state => state.project.updates)
    // console.log(updates)
    const currentUpdate = updates.find(update => update.id === currentUpdateId)
    // console.log(currentUpdate)

    const [description, setDescription] = useState(currentUpdate?.description)
    const [title, setTitle] = useState(currentUpdate?.title)

    function handleUpdateUpdate(e) {
        e.preventDefault()

        dispatch(updateActions.patchUpdate({ idx: currentUpdateId, title: title, description: description, project_id: currentProject }))

    }



    return (
        <div>
            <h1>UpdatePatchComponent</h1>
            <li className="btn-primary" onClick={() => {
                setToRenderComponent(true)
                setToRenderDisplay(false)
                setToRenderPatch(false)
            }}>LIST</li>
            <li>CurrentUpdateId: {currentUpdateId}</li>
            <form onSubmit={handleUpdateUpdate}>
                <div>
                    <label>
                        Change An Update:
                        <div>
                            <input
                                type="text"
                                name="title"
                                value={title}
                                placeholder="Title"
                                className="updateTitle_TF"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <textarea
                                name="description"
                                value={description}
                                rows="8"
                                columns="30"
                                placeholder="Add New Update"
                                className="update_TF"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <button type="submit" className="createUpdateBtn">Change Update</button>
                </div>
            </form>
        </div>
    )
}