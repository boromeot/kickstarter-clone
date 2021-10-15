import React from "react";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormWrapper from "../FormWrapper";
import * as updateActions from '../../../../store/update'

const UpdatesForm = ({ updates }) => {
    const dispatch = useDispatch()

    const [updateDescription, setUpdateDescription] = useState("")
    const [updateTitle, setUpdateTitle] = useState("")
    const currentUser = useSelector(state => state.session.user?.id)
    const project = useSelector(state => state.project)
    console.log(project.id)
    console.log(currentUser)

    const infoArr = [
        'Updates are an integral part of your project.',
        'This is the only way your backers know what you are doing and what is on the horizon for this project'
    ]

    const payload = {
        title: updateTitle,
        description: updateDescription,
        user_id: currentUser,
        project_id: project.id
    }

    useEffect(() => {
        const newUpdate = {
            title: updateTitle,
            description: updateDescription,
            user_id: currentUser,
            project_id: project.id
        }
    }, [dispatch, payload])


    return (
        <FormWrapper header='Create an Update' infoArr={infoArr}>
            <div>
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
                    <button type="submit" className="createUpdateBtn" >Add Update</button>
                </div>
            </div>
        </FormWrapper>
    )
}

export default UpdatesForm;