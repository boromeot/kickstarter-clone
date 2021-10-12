import "./risks.css";

function Risks({risks}){

  return(
    <div class="component-container">
      <div class="risk-inner">
        <h2 class="component-header">Risks</h2>
        <div class="risk-description">{risks}</div>
      </div>
    </div>
  )
}

export default Risks
