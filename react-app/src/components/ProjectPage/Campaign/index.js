import React, { useEffect } from "react";
import "./Campaign.css";

function Campaign({ campaign }){

  // useEffect(() => {
  //   let campaignText = document.getElementsByClassName("campaign-description");
  //   campaignText[0].innerHTML = campaign;
  // })

  return(
    <div className="grid-container pr3 py8">
      <div className="grid-row">
        <div className="float-left width-8-12">
          <div className="pz3">
            <div id="campaign">
              <div className="grid-row">
                <nav className="sticky ">

                </nav>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Campaign
