import React from "react";
import FormWrapper from "../FormWrapper";

const CategoryForm = () => {
  const infoArr = [
    'Choose the category that most closely aligns with your project.',
    'Think of where backers may look to find it. Reach a more specific community by also choosing a subcategory.',
    'You’ll be able to change the category and subcategory even after your project is live.'
  ];
  return (
    <FormWrapper header='Projects category' infoArr={infoArr}>

    </FormWrapper>
  )
}

export default CategoryForm;
