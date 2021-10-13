import UpdatesView from '../UpdatesView'
import { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as updateActions from '../../store/update'
import './UpdateDisplayComponent.css';

export default function UpdateDisplayComponent({ setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId }) {

    const updates = useSelector(state => state.project.updates);
    const chosenUpdate = updates.find(update => update.id === currentUpdateId);
    console.log(chosenUpdate);

    return (
        <div>
            <div className="updateDisplay outter_container">
                <div className="updateDisplay inner_Container">
                    <h1>UpdateDisplayComponent</h1>
                    <h1>{chosenUpdate.title}</h1>
                    <h1>{chosenUpdate.description}</h1>
                    <h1>{chosenUpdate.username}</h1>
                    <li className="updateBtn btn-primary" onClick={() => {
                        setToRenderComponent(false)
                        setToRenderDisplay(false)
                        setToRenderPatch(true)
                    }}>
                        UPDATE
                    </li>
                </div>

            </div>
        </div>
    )
}