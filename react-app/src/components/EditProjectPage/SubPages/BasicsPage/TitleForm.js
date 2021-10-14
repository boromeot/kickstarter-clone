import React from "react";
import FormInfo from "../FormInfo";

const TitleForm = ({title, handleChange}) => {
  const infoArr = [
    'Write a clear, brief title and subtitle to help people quickly understand your project. Both will appear on your project and pre-launch pages.',
    'Potential backers will also see them if your project appears on category pages, search results, or in emails we send to our community.'
  ];
  return (
    <>
      <FormInfo header='Project title' infoArr={infoArr}/>
      <textarea
        name='title'
        value={title}
        onChange={handleChange}
        placeholder='Papercuts: A Party Game for the Rude and Well-Read'
      />
    </>
  )
}

export default TitleForm;
