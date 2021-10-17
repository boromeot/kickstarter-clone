import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as FAQActions from '../../../store/faq';
import './FAQ.css';

function FAQpage({ faq, setFAQListRender, setFAQRender, setFAQId }) {
  const dispatch = useDispatch();
  const [hide, setHide] = useState(true);

  function toggleHide() {
    if (hide) {
      setHide(false);
    } else {
      setHide(true)
    }
  }


  function handleDelete(e) {

    dispatch(FAQActions.deleteFAQ({ idx: faq.id }))

  }

  return (
    <div className="question-container" onClick={() => toggleHide()}>
      <div className="question-preview">
        <div className="question">{faq.question}</div>
        <div className="arrow">{'>'}</div>
      </div>
      <div className={hide ? "hide" : ""}>
        <div className="answer">
          {faq.answer}
          <li className="FAQPage_editBtn" onClick={() => {
            setFAQId(faq.id)
            setFAQRender(false)
            setFAQListRender(true)
          }} >
            edit
          </li>
          <li className="FAQPage_editBtn" onClick={() => handleDelete()} >
            delete
          </li>
        </div>
      </div>
    </div>
  )
}

export default FAQpage
