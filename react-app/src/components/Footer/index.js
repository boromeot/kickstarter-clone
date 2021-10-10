import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-categories-container'>
        <div className='footer-categories'>
          <NavLink to='#' className='footer-category-item underline'>Category</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Category</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Category</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Category</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Category</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Category</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Category</NavLink >
          <NavLink to='#' className='footer-category-item underline'>Category</NavLink >
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
    </div>
  )
}

export default Footer;
