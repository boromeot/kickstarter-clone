import React from "react";
import UpdateBody from "./UpdateBody";
import UpdateFooter from "./UpdateFooter";
import UpdateHeader from "./UpdateHeader";

const Update = ({ update, index }) => {
  return (
    <article>
      <UpdateHeader update={update} index={index} />
      <UpdateBody update={update} />
      <UpdateFooter update={update} />
    </article>
  )
}

export default Update;
