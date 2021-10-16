import React from "react";
import FormWrapper from "../../FormWrapper";
import '../TitleForm.css';

const VideoForm = ({ video_src, handleChange }) => {
  const infoArr = [
    'Add a video that describes your project.',
    'Tell people what you’re raising funds to do, how you plan to make it happen, who you are, and why you care about this project.',
    'After you’ve uploaded your video, use our editor to add captions and subtitles so your project is more accessible to everyone.'
  ]
  return (
    <FormWrapper header='Project video' infoArr={infoArr}>
      <div className='title-form-container'>
        <div className='title-form-title-container'>
          <div className='title-form-header'>Title</div>
          <textarea
            name='video_src'
            value={video_src}
            onChange={handleChange}
            placeholder='https://www.youtube.com/embed/<video_id>'
            className='title-form-text-area edit-page-text-area'
            maxLength={100}
          />
          <div className='title-form-character-count'>{video_src?.length}/100</div>
        </div>
      </div>
    </FormWrapper>
  )
}

export default VideoForm;
