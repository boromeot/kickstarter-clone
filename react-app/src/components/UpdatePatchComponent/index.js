import './UpdatePatchComponent.css';

export default function UpdatePatchComponent({ setToRenderComponent, setToRenderDisplay, setToRenderPatch, currentUpdateId }) {
    return (
        <div>
            <h1>UpdatePatchComponent</h1>
            <li className="btn-primary" onClick={() => {
                setToRenderComponent(true)
                setToRenderDisplay(false)
                setToRenderPatch(false)
            }}>LIST</li>
            <li>CurrentUpdateId: {currentUpdateId}</li>
        </div>
    )
}