import React from "react";
import { NavLink } from "react-router-dom";
import './Update.css';

const Update = () => {
  return (
    <div className='update-spacer'>
      <div className='hamburger-icon-container'>
        <svg className='hamburger-icon' viewBox='0 0 60 60' aria-hidden="true">
          <path d="M30 52C17.85 52 8 42.15 8 30S17.85 8 30 8s22 9.85 22 22-9.85 22-22 22zm-9-32c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h13c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H21zm0 6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H21zm0 6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H21zm0 6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1h-6z" fill-rule="evenodd">

          </path>
        </svg>
      </div>
      <NavLink className='update-container' to='#'>
        <div className='update'>
          <article>
            <header>
              <div className='update-counter-container'>
                <span className='update-counter'>Placeholder Update #3</span>
              </div>
              <h2 className='update-header'>Placeholder</h2>
              <div className='update-author-container '>
                <img className='update-author-icon' alt="Author's profile"/>
                <div className='pl2'>
                  <div>
                    Placeholder author name
                    <span className='update-author-creator'>Creator</span>
                  </div>
                  <span className='update-date'>Placeholder date</span>
                </div>
              </div>
            </header>
            <div className='update-body'>
              <div className='mt4'>
                <div className='update-content'>
                  <p>
                    Bacon ipsum dolor amet shank chicken bacon pig corned beef ball tip hamburger strip steak short loin tongue tenderloin boudin.
                    Ham picanha landjaeger meatball pork belly andouille, rump ground round pastrami filet mignon.
                    Pork loin drumstick pastrami fatback picanha boudin kielbasa leberkas ham venison kevin strip steak sirloin.
                    Chicken prosciutto jerky, leberkas andouille tenderloin doner ribeye sausage tri-tip t-bone bresaola turkey chuck venison.
                    T-bone venison ball tip brisket pork loin swine. Buffalo short ribs tri-tip brisket.
                  </p>
                  <p>
                    Bacon ipsum dolor amet shank chicken bacon pig corned beef ball tip hamburger strip steak short loin tongue tenderloin boudin.
                    Ham picanha landjaeger meatball pork belly andouille, rump ground round pastrami filet mignon.
                    Pork loin drumstick pastrami fatback picanha boudin kielbasa leberkas ham venison kevin strip steak sirloin.
                    Chicken prosciutto jerky, leberkas andouille tenderloin doner ribeye sausage tri-tip t-bone bresaola turkey chuck venison.
                    T-bone venison ball tip brisket pork loin swine. Buffalo short ribs tri-tip brisket.
                  </p>
                  <p>
                    Bacon ipsum dolor amet shank chicken bacon pig corned beef ball tip hamburger strip steak short loin tongue tenderloin boudin.
                    Ham picanha landjaeger meatball pork belly andouille, rump ground round pastrami filet mignon.
                    Pork loin drumstick pastrami fatback picanha boudin kielbasa leberkas ham venison kevin strip steak sirloin.
                    Chicken prosciutto jerky, leberkas andouille tenderloin doner ribeye sausage tri-tip t-bone bresaola turkey chuck venison.
                    T-bone venison ball tip brisket pork loin swine. Buffalo short ribs tri-tip brisket.
                  </p>
                </div>
              </div>
            </div>
            <footer>
              <div className='update-footer-container'>
                <div className='update-footer-icons'>
                  
                </div>

              </div>
            </footer>
          </article>
        </div>
      </NavLink>
    </div>
  )
}

export default Update;
