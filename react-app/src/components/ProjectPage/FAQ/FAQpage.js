import { useState } from 'react';

import './FAQ.css';

function FAQpage ({faq}){
  const [hide, setHide] = useState(true);
  function toggleHide(){
    if (hide){
      setHide(false);
    } else {
      setHide(true)
    }
  }
  return(
    <div class="component-container">
      <div class="component-inner">
        <div class="question-container" onClick={()=>toggleHide()}>
          <div class="question-preview">
            <div class="question">{faq.question}</div>
          </div>
          <div class={hide ? "hide" : ""}>
            <div class="answer">{faq.answer}</div>
            <div class="updated-at">{faq.updated_at}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQpage
