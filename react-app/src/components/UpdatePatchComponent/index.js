import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as updateActions from '../../store/update'
import './UpdatePatchComponent.css';

export default function UpdatePatchComponent({ setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId }) {

    const dispatch = useDispatch()


    const currentUser = useSelector(state => state.session.user?.id)
    const updates = useSelector(state => state.project.updates)
    // console.log(updates)
    const currentUpdate = updates.find(update => update.id === currentUpdateId)
    // console.log(currentUpdate)

    const [updateDescription, setUpdateDescription] = useState(currentUpdate?.description)
    const [updateTitle, setUpdateTitle] = useState(currentUpdate?.title)

    function handleUpdateUpdate(e) {
        e.preventDefault()
        const payload = {
            title: updateTitle,
            description: updateDescription,
            user_id: currentUser,
            project_id: 1
        }
        console.log('')
        dispatch(updateActions.patchUpdate({ idx: currentUpdateId }))

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
                                value={updateTitle}
                                placeholder="Title"
                                className="updateTitle_TF"
                                onChange={(e) => setUpdateTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <textarea
                                name="description"
                                value={updateDescription}
                                rows="8"
                                columns="30"
                                placeholder="Add New Update"
                                className="update_TF"
                                onChange={(e) => setUpdateDescription(e.target.value)}
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