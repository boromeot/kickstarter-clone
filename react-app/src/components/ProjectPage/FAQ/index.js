import FAQpage from './FAQpage';
import './FAQ.css';

function FAQ({ faqs }) {
  return (
    <div className="component-container">
      <div className="faq-left">
        <h2 className="component-header">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs?.map((faq) =>
            <FAQpage faq={faq} />
          )}
        </div>
      </div>
      <div className="faq-right">
        <span>Don't see the answer to your question?</span>
        <button>Ask a question</button>
      </div>
    </div>
  )
}

export default FAQ
