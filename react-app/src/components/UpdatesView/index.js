import './UpdatesView.css'
import { useState, useEffect } from 'react'
import * as updateActions from '../../store/update'

function UpdatesView() {
    const [newUpdate, setNewUpdate] = useState("")
    const [updateTitle, setUpdateTitle] = useState("")

    function handleUpdateCreation() {
        const payload = {
            title: updateTitle,
            description: newUpdate
        }
        // dispatch(updateActions.createUpdate(payload))

    }

    return (
        <div>
            <h1>Updates Component</h1>
            <form onSubmit={handleUpdateCreation}>
                <div>
                    <label>
                        Create An Update:
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
                                name="update"
                                value={newUpdate}
                                rows="8"
                                columns="30"
                                placeholder="Add New Update"
                                className="update_TF"
                                onChange={(e) => setNewUpdate(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div>
                    <button type="submit" className="createUpdateBtn">Add Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdatesView;