import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-tags-container'>
        <div className='footer-categories'>
          <NavLink to='#' className='footer-category-item underline'>Environment</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Food</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Music</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Games</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Art</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Comics</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Technology</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Film</NavLink >
        </div>
      </div>
      <div className='flex-center'>
        <div className='footer-item-container'>
          <h4>Kekoa Boromeo</h4>
          <span><a className='footer-item underline' href='https://github.com/boromeot' target="_blank">Github</a></span>
          <span><a className='underline' href='https://www.linkedin.com/in/kekoa-boromeo/' target="_blank">Linkedin</a></span>
        </div>
        <div className='footer-item-container'>
          <h4>Eric Mahoney</h4>
          <span><a className='underline' href='https://github.com/langston7' target="_blank">Github</a></span>
          <span><a className='underline' href='https://www.linkedin.com/in/eric-mahoney-34a389204/' target="_blank">Linkedin</a></span>
        </div>
        <div className='footer-item-container'>
          <h4>Trevin Woods</h4>
            <span><a className='underline' href='https://github.com/Woods-Trevin' target="_blank">Github</a></span>
            <span><a className='underline' href='https://www.linkedin.com/in/trevinwoods4778661aa/' target="_blank">Linkedin</a></span>
        </div>
      </div>
      <div className='footer-legal-container'>
        <div className='footer-categories'>
            <NavLink to='#' className='footer-category-item underline'>Trust & Safety</NavLink >
            <NavLink to='#' className='footer-category-item underline'>Terms of Use</NavLink >
            <NavLink to='#' className='footer-category-item underline'>Private Policy</NavLink >
            <NavLink to='#' className='footer-category-item underline'>Cookie Policy</NavLink >
            <NavLink to='#' className='footer-category-item underline'>Accessibility Statement</NavLink >
            <NavLink to='#' className='footer-category-item underline'>CA Notice of Consent</NavLink >
        </div>
      </div>
    </div>
  )
}

export default Footer;
