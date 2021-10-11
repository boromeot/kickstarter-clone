import './FAQ.css';
import FAQpage from './FAQpage';

function FAQ({faqs}){

  return(
    <div>
      <h2 class="faq-header">Frequently Asked Questions</h2>
      <div class="component-container">
        {faqs?.map((faq) =>
          <FAQpage faq={faq}/>
        )}
      </div>
    </div>
  )
}

export default FAQ
