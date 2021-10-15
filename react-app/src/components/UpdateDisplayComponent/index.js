import { useSelector } from 'react-redux'
import './UpdateDisplayComponent.css';

export default function UpdateDisplayComponent({ setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId, updateNumber }) {

    const updates = useSelector(state => state.project.updates);
    const chosenUpdate = updates.find(update => update.id === currentUpdateId);

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