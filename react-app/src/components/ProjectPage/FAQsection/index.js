import React from "react";

const FAQsection = ({ faqs }) => {

  console.log(faqs, 'faqs');

  if (faqs?.length > 0) {
    return (
      <h3>Faqs</h3>
    )
  }

  return (
    <div className='py10'>
      <div className='grid-container' style={{maxWidth: '1140px'}}>
        <div className='grid-row'>
          <div className='mb5 pz3'>
            <h3 className='font-size--24 font-weight--400'>Frequently Asked Questions</h3>
          </div>
        </div>
        <div className='grid-row'>
          <p className='mb3 font-size--16'>Looks like there aren't any frequently asked questions yet.</p>
        </div>
      </div>
    </div>
  )

}

export default FAQsection;
