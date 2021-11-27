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
                  <span className='mr4'>
                    <svg className='update-footer-icon' viewBox='0 0 60 60'>
                      <path d="M55 8c.552 0 1 .448 1 1v34c0 .552-.448 1-1 1H36L21.83 55.73c-.718.618-1.83.106-1.83-.842V44H5c-.552 0-1-.448-1-1V9c0-.552.448-1 1-1h50z">
                      </path>
                    </svg>
                    Placeholder 1
                  </span>
                  <span className='mr4'>
                    <svg className='update-footer-icon' viewBox='0 0 60 60'>
                      <path d="M50.977 10.664c4.402 3.202 6.03 8.916 4.41 14.052-1.216 3.858-3.88 7.266-6.706 10.092-4.99 4.99-15.327 14.174-18.023 16.56-.38.336-.934.336-1.312 0-2.698-2.386-13.034-11.57-18.024-16.56-2.825-2.826-5.49-6.234-6.707-10.092-1.618-5.136.008-10.85 4.41-14.052 3.434-2.498 8.102-3.17 12.192-2.162C25.197 9.51 28.2 12.506 30 16.004c1.8-3.498 4.803-6.494 8.785-7.502 4.09-1.008 8.758-.336 12.192 2.162z">
                      </path>
                    </svg>
                    Placeholder 3
                  </span>
                </div>
                <NavLink className='update-readmore-link' to='#'>
                  <div className='update-readmore-container'>
                    Read More
                    <svg className='update-readmore-icon' viewBox='0 0 60 60'>
                      <path fill-rule="nonzero" d="M45 30L19 4l-5 5 21 21-21 21 5 5"></path>
                    </svg>
                  </div>
                </NavLink>
              </div>
            </footer>
          </article>
        </div>
      </NavLink>
    </div>
  )
}

export default Update;
