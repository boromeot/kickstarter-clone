import React from "react";
import SubPageHeader from '../SubPageHeader';
import FundingForm from "./FundingForm";

const FundingPage = ({}) => {
  return (
    <>
      <SubPageHeader header='Let’s talk about money' subHeader='Plan and manage your project’s finances.' />
      <FundingForm />
    </>
  )
}

export default FundingPage;
