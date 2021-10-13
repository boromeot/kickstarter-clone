import React, { useState } from "react";

const TagForm = ({ tag, handleChange, currentStep }) => {

  if (currentStep !== 1) {
    return null
  }

  return (
    <select
      name='tag'
      value={tag}
      onChange={handleChange}
    >
      <option value='Environment'>Environment</option>
      <option value='Food'>Food</option>
      <option value='Music'>Music</option>
      <option value='Games'>Games</option>
      <option value='Art'>Art</option>
    </select>
  )
}

export default TagForm;
