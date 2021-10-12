import { useState } from 'react';

import './FAQ.css';

function FAQpage({ faq }) {
  const [hide, setHide] = useState(true);
  function toggleHide() {
    if (hide) {
      setHide(false);
    } else {
      setHide(true)
    }
  }
  return (
    <div class="question-container" onClick={() => toggleHide()}>
      <div class="question-preview">
        <div class="question">{faq.question}</div>
        <div class="arrow">{'>'}</div>
      </div>
      <div class={hide ? "hide" : ""}>
        <div class="answer">{faq.answer}</div>
      </div>
    </div>
  )
}

export default FAQpage
