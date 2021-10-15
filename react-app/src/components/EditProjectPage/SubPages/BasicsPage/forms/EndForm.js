import React from "react";
import FormWrapper from "../../FormWrapper";

const EndForm = () => {
  const infoArr = [
    'Set a time limit for your campaign. You won’t be able to change this after you launch.'
  ]
  return (
    <FormWrapper header='Target end date' infoArr={infoArr}>

    </FormWrapper>
  )
}

export default EndForm;
