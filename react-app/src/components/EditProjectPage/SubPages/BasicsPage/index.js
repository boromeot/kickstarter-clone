import React from "react";
import SubPageHeader from '../SubPageHeader';
import TitleForm from "./TitleForm";
import CategoryForm from "./CategoryForm";
import VideoForm from "./VideoForm";
import ImageForm from "./ImageForm";
import StartForm from "./StartForm";
import EndForm from "./EndForm";

const BasicsPage = ({ title, description, tag_id, handleChange }) => {
  return (
    <>
      <SubPageHeader header='Start with the basics' subHeader='Make it easy for people to learn about your project.' />
      <TitleForm title={title} description={description} handleChange={handleChange} />
      <CategoryForm tag_id={tag_id} handleChange={handleChange} />
      <VideoForm />
      <ImageForm />
      <StartForm />
      <EndForm />
    </>
  )
}

export default BasicsPage;
