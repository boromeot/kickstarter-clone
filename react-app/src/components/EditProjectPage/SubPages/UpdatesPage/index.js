import React from "react";
import SubPageHeader from '../SubPageHeader';
import UpdatesForm from './UpdatesForm';

const UpdatesPage = ({ updates }) => {
  return (
    <>
      <SubPageHeader header='Keep people up to date' subHeader='Let people know of any changes going on with your project.' />
      <UpdatesForm updates={updates} />
    </>
  )
}

export default UpdatesPage;
