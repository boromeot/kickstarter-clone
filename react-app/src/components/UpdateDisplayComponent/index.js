import UpdatesView from '../UpdatesView'
import { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as updateActions from '../../store/update'
import './UpdateDisplayComponent.css';

export default function UpdateDisplayComponent({ setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId, updateNumber }) {

    const updates = useSelector(state => state.project.updates);
    const chosenUpdate = updates.find(update => update.id === currentUpdateId);
    // console.log(chosenUpdate);

    return (
        <div>
            <div className="updateDisplay outter_container">
                <div className="updateDisplay inner_Container">
                    <li className="updateBtn btn btn-primary" onClick={() => {
                        setToRenderComponent(true)
                        setToRenderDisplay(false)
                        setToRenderPatch(false)
                    }}>
                        <li className="updateBtn leftArrow">{'<'}</li> {'All updates'}
                    </li>
                    <li className="updateDisplayNum item">UPDATE #{updateNumber}</li>
                    <li className="updateDisplayTitle item">{chosenUpdate.title}</li>
                    <div className="user_ctnr">
                        <img className="updateDisplayImg item" src={'/images/person-icon.png'} alt="alt" />
                        <li className="updateDisplayUsername item">{chosenUpdate.username}</li>
                    </div>
                    <li className="updateDisplayDescription item">{chosenUpdate.description}</li>
                </div>

            </div>
        </div>
    )
}