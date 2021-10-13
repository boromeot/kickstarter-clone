import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Start.css';
import TagForm from './StartForms/TagForm';
import DescriptionForm from './StartForms/DescriptionForm';
import TitleForm from './StartForms/TitleForm';

const CreateProjectPage = () => {
  const user = useSelector(state => state.session.user);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({tag: 'tag', description: 'description', title: 'title'})
  const totalSteps = 3;

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1)
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prevStep => prevStep + 1)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    const oldState = {...formData}
    setFormData({
      ...oldState,
      [name]: value
    })
  }

  //todo: add dispatch
  const handleSubmit = e => {
    e.preventDefault();
  }

  if (!user) {
    return <Redirect to='/login' />
  }

  return (
    <div className='start-container'>
      <div className='start-step-count'>{currentStep} of {totalSteps}</div>
      <form onSubmit={handleSubmit}>
          <TagForm tag={formData.tag} handleChange={handleChange} currentStep={currentStep} />
          <DescriptionForm description={formData.description} handleChange={handleChange} currentStep={currentStep} />
          <TitleForm title={formData.title} handleChange={handleChange} currentStep={currentStep} />
      </form>
      <div>
        <div className='start-form-spacer'>
          <div className='start-form-button-container'>
            <button onClick={prevStep}>Prev</button>
            <button className='start-form-next-btn' onClick={nextStep}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProjectPage;
