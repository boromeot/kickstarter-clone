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
    <div className="question-container" onClick={() => toggleHide()}>
      <div className="question-preview">
        <div className="question">{faq.question}</div>
        <div className="arrow">{'>'}</div>
      </div>
      <div className={hide ? "hide" : ""}>
        <div className="answer">{faq.answer}</div>
      </div>
    </div>
  )
}

export default FAQpage
