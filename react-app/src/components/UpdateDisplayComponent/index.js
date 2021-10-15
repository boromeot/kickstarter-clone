import { useSelector } from 'react-redux'
import './UpdateDisplayComponent.css';

export default function UpdateDisplayComponent({ setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId, updateNumber }) {

    const updates = useSelector(state => state.project.updates);
    const chosenUpdate = updates.find(update => update.id === currentUpdateId);

    return (
        <div className="root-container">
            <div className="updateDisplay outter_container">
                <div className="updateDisplay inner_Container">
                    <li className="updateBtn btn btn-primary" onClick={() => {
                        setToRenderComponent(true)
                        setToRenderDisplay(false)
                        setToRenderPatch(false)
                    }}>
                        <p className="updateBtn leftArrow">{'<'}</p> {'All updates'}
                    </li>
                    <li className="updateDisplayNum item">UPDATE #{updateNumber}</li>
                    <li className="updateDisplayTitle item">{chosenUpdate.title}</li>
                    <div className="user_ctnr">
                        <img className="updateDisplayImg item" src={'/images/person-icon.png'} alt="alt" />
                        <li className="updateDisplayUsername item">{chosenUpdate.username}</li>
                        <li className="creatorTag" > Creator </li>
                    </div>
                    <div className="updateDisplayDescriptionCtnr">
                        <li className="updateDisplayDescription item">{chosenUpdate.description}</li>
                    </div>
                </div>
            </div>
        </div>
    )
}