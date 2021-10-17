import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as FAQActions from '../../../store/faq'

import './FAQListComponent.css'


export default function FAQListComponent({ FAQQuestion, FAQAnswer, FAQId }) {
    const dispatch = useDispatch()
    const { id, title, description, campaign, video_src, image_src, current_funding, pledge_goal, faqs, risks, comments, tag, username, user_id } = useSelector(state => state.project)

    const currentFAQ = faqs.find(faq => faq.id === FAQId)
    console.log(currentFAQ)

    const [faqQuestion, setfaqQuestion] = useState(currentFAQ.question ? currentFAQ.question : "")
    const [faqAnswer, setfaqAnswer] = useState()

    // useEffect(() => {

    // }, [])

    function handlePatch(e) {
        e.preventDefault()
        const payload = {
            idx: currentFAQ.id,
            question: faqQuestion,
            answer: faqAnswer,
        }
        console.log(faqQuestion)
        console.log(faqAnswer)
        dispatch(FAQActions.patchFAQ(payload))
    }

    return (
        <div>
            <h1> FAQListComponent </h1>
            <div>
                <form onSubmit={handlePatch}>
                    <div className="FAQ_Question_TF">
                        <input
                            type="text"
                            name="question"
                            value={faqQuestion}
                            placeholder=""
                            className="FAQ_question"
                            onChange={(e) => setfaqQuestion(e.target.value)}
                        />
                    </div>
                    <div className="FAQ_Answer_TF">
                        <input
                            type="text"
                            name="answer"
                            value={faqAnswer}
                            placeholder="Answer This Question"
                            className="FAQ_answer"
                            onChange={(e) => setfaqAnswer(e.target.value)}
                        />
                    </div>
                    <div className="FAQList_btn_ctnr">
                        <div className="editBtn_container">
                            <button type="submit" className="FAQ_editBtn" >
                                Edit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}