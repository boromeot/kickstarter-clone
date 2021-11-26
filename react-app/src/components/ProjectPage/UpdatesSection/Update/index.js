import React from "react";
import { NavLink } from "react-router-dom";
import './Update.css';

const Update = () => {
  return (
    <div className='grid-container'>
      <div className='grid-row'>
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
                    <img className='update-author-icon' />
                    <div className='pl2'>
                      <div>
                        Placeholder author name
                        <span className='update-author-creator'>Creator</span>
                      </div>
                    </div>
                  </div>
                </header>
                <div>

                </div>
                <footer>

                </footer>
              </article>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Update;
