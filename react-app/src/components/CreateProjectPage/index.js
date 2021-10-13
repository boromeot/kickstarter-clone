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

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep -1)
    }
  }

  const nextStep = () => {
    if (currentStep < 3) {
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

  if (!user) {
    return <Redirect to='/login' />
  }

  return (
    <div className='start-container'>
      <div>Step {currentStep} of 3</div>
      <form >
        <TagForm tag={formData.tag} handleChange={handleChange} currentStep={currentStep} />
        <DescriptionForm description={formData.description} handleChange={handleChange} currentStep={currentStep} />
        <TitleForm title={formData.title} handleChange={handleChange} currentStep={currentStep} />
      </form>
      <p>{formData.tag}</p>
      <p>{formData.description}</p>
      <p>{formData.title}</p>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
    </div>
  )
}

export default CreateProjectPage;
