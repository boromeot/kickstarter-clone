import React from "react";
import FormWrapper from "../FormWrapper";

const StartForm = () => {
  const infoArr = [
    'We’ll provide you with recommendations on when to complete steps that may take a few days to process. You can edit this date up until the moment you launch your project, which must always be done manually.',
    'We won’t automatically launch your project.'
  ]
  return (
    <FormWrapper header='Target launch date' infoArr={infoArr}>

    </FormWrapper>
  )
}

export default StartForm;
