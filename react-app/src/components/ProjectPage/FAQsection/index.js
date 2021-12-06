import React from "react";
import FAQ from "./FAQ";

const FAQsection = ({ faqs }) => {

  return (
    <div className='py10'>
      <div className='grid-container' style={{maxWidth: '1140px'}}>
        <div className='grid-row'>
          <div className='mb5 pz3'>
            <h3 className='font-size--24 font-weight--400'>Frequently Asked Questions</h3>
          </div>
        </div>
        <div className='grid-row'>
          {faqs?.length > 0
            ? <div className='pz3'>
                {faqs.map(faq => {
                  return <FAQ faq={faq} />
                })}
              </div>
            :
              <p className='mb3 font-size--16'>Looks like there aren't any frequently asked questions yet.</p>
          }
          </div>
      </div>
    </div>
  )

}

export default FAQsection;
