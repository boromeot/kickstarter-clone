import { useState } from 'react';
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
        <div className="FAQWindow_bottom">
          {faq.answer}
          <div className="FAQBtns_ctnr">
            <li className="FAQPage_editBtn" onClick={() => {
              setFAQId(faq.id)
              setFAQRender(false)
              setFAQListRender(true)
            }} >
              edit
            </li>
            <li className="FAQPage_deleteBtn" onClick={() => handleDelete()} >
              delete
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQpage
