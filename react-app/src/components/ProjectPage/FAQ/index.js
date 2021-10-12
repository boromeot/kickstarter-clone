import FAQpage from './FAQpage';
import './FAQ.css';

function FAQ({faqs}){

  return(
    <div class="component-container">
      <div class="faq-left">
        <h2 class="component-header">Frequently Asked Questions</h2>
        <div class="faq-container">
          {faqs?.map((faq) =>
            <FAQpage faq={faq}/>
          )}
        </div>
      </div>
      <div class="faq-right">
        <span>Don't see the answer to your question?</span>
        <button>Ask a question</button>
      </div>
    </div>
  )
}

export default FAQ
