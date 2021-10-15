import React from "react";
import FormWrapper from "../FormWrapper";

const FundingForm = () => {
  const infoArr = [
    'Set an achievable goal that covers what you need to complete your project.',
    'Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.'
  ]
  return (
    <FormWrapper header='Funding goal' infoArr={infoArr}>

    </FormWrapper>
  )
}

export default FundingForm;
