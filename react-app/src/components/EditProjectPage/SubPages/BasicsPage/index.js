import React from "react";
import SubPageHeader from '../SubPageHeader';
import TitleForm from "./TitleForm";
import CategoryForm from "./CategoryForm";

const BasicsPage = ({ title, handleChange }) => {
  return (
    <>
      <SubPageHeader header='Start with the basics' subHeader='Make it easy for people to learn about your project.' />
      <TitleForm title={title} handleChange={handleChange} />
      <CategoryForm />
    </>
  )
}

export default BasicsPage;
