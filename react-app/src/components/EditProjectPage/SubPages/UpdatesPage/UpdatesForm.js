import React from "react";
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormWrapper from "../FormWrapper";
import * as updateActions from '../../../../store/update'
import './UpdatesForm.css'

const UpdatesForm = ({ updates, setNewUpdate, newUpdate }) => {
    const dispatch = useDispatch()

    const [updateDescription, setUpdateDescription] = useState("")
    const [updateTitle, setUpdateTitle] = useState("")
    const [updated, setUpdated] = useState(false)
    const currentUser = useSelector(state => state.session.user?.id)
    const project = useSelector(state => state.project)
    console.log(project.id)
    console.log(currentUser)

    const infoArr = [
        'Updates are an integral part of your project.',
        'This is the only way your backers know what you are doing and what is on the horizon for this project'
    ]

    function submitPayload() {
        const payload = {
            title: updateTitle,
            description: updateDescription,
            user_id: currentUser,
            project_id: project.id
        }

        setNewUpdate(payload)

    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setUpdated(false)
    }, [dispatch, newUpdate])


    return (
        <FormWrapper header='Create an Update' infoArr={infoArr}>
            <div className='createUpdate_outmost_ctnr'>
                <div className='newUpdateConfirmation_ctnr'>
                    {updated &&
                        <li className='newUpdate_confirmation'> PLEASE SAVE!</li>
                    }
                </div>
                <div className="createUpdate_ctnr" >
                    {/* <div className="createUpdate title">
                        Create An Update:
                    </div> */}
                    <label>
                        <div className="createUpdate titleLabel">
                            Enter Title:
                        </div>
                        <div className="createUpdate title_Ctnr">
                            <input
                                type="text"
                                name="title"
                                value={updateTitle}
                                placeholder="Title"
                                className="createUpdateTitle_TF"
                                onChange={(e) => setUpdateTitle(e.target.value)}
                            />
                        </div>
                    </label>
                    <label>
                        <div className="createUpdate descriptionLabel">
                            Enter Description:
                        </div>
                        <div className="createUpdate description_Ctnr">
                            <textarea
                                name="description"
                                value={updateDescription}
                                rows="8"
                                columns="30"
                                placeholder="Add New Update"
                                className="createUpdateDescription_TF"
                                onChange={(e) => setUpdateDescription(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <li className="updateSubmit" onClick={() => {
                    submitPayload()
                    setUpdated(true)
                    console.log(newUpdate)
                }} >
                    CREATE
                </li>
            </div>
        </FormWrapper>
    )
}

export default UpdatesForm;