import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Start.css';
import TagForm from './StartForms/TagForm';
import DescriptionForm from './StartForms/DescriptionForm';

const CreateProjectPage = () => {
  const user = useSelector(state => state.session.user);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({tag: 'tag', description: 'description', title: 'title'})

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
      <div>{currentStep}</div>
      <form >
        <TagForm tag={formData.tag} handleChange={handleChange} currentStep={currentStep} />
        <DescriptionForm description={formData.description} handleChange={handleChange} currentStep={currentStep} />
      </form>
      <p>{formData.tag}</p>
      <p>{formData.description}</p>
      <p>{formData.title}</p>
      <button onClick={() => setCurrentStep(prev => prev - 1)}>Prev</button>
      <button onClick={() => setCurrentStep(prev => prev + 1)}>Next</button>
    </div>
  )
}

export default CreateProjectPage;
