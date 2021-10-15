import React from "react";
import SubPageHeader from '../SubPageHeader';
import RisksForm from "./forms/RisksForm";

const StoryPage = ({}) => {
  return (
    <>
      <SubPageHeader header='Introduce your project' subHeader='Tell people why they should be excited about your project. Get specific but be clear and be brief.' />
      <RisksForm />
    </>
  )
}

export default StoryPage;
