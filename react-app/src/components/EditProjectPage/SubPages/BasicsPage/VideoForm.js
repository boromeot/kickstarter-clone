import React from "react";
import FormWrapper from "../FormWrapper";

const VideoForm = () => {
  const infoArr = [
    'Add a video that describes your project.',
    'Tell people what you’re raising funds to do, how you plan to make it happen, who you are, and why you care about this project.',
    'After you’ve uploaded your video, use our editor to add captions and subtitles so your project is more accessible to everyone.'
  ]
  return (
    <FormWrapper header='Project video' infoArr={infoArr}>

    </FormWrapper>
  )
}

export default VideoForm;
