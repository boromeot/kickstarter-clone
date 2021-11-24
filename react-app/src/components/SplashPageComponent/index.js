import React, { useEffect } from 'react';
import * as projectAction from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SplashNav from './SplashNav';

import './SplashPageComponent.css'


export default function SplashPageComponent() {
    const dispatch = useDispatch()
    const randomProjects = useSelector(state => Object.values(state.project))

    useEffect(() => {
        dispatch(projectAction.getRandomProjects());
        return () => {
            dispatch(projectAction.clear_project());
        }
    }, [dispatch])
    console.log('randomProjects', randomProjects);
    return (
        <>
            <SplashNav />
            <div className='border-bottom-gray'>
                <div className='grid-container'>
                    <div className='splash-content'>
                        <div className='splash-spacer-left'>
                            <div className='splash-section'>
                                <h3 className='splash-main-project'>Featured Project</h3>
                                <NavLink className='splash-image-link' to={`/projects/${randomProjects[0]?.id}/comments`}>
                                    <img className='splash-main-image' src={`${randomProjects[0]?.image_src}`} alt='main featured project'/>
                                    <div className='splash-main-progress'></div>
                                    <h3 className='splash-image-header'>{`${randomProjects[0]?.title}`}</h3>
                                    <p className='splash-image-description'>{`${randomProjects[0]?.description}`}</p>
                                    <span className='splash-image-author'>By {`${randomProjects[0]?.username}`}</span>
                                </NavLink>
                            </div>
                        </div>
                        <div className='splash-spacer-right'>
                            <h3 className='splash-main-project'>Recommended for you</h3>
                            <ul className='splash-recommended-projects'>
                                <li className='border-bottom-gray pb3'>
                                    <div className='splash-recommended-content'>
                                        <NavLink to='#' className='splash-recommended-link'>
                                            <img className='splash-recommended-image' src={`${randomProjects[1]?.image_src}`} alt='first recommended project'></img>
                                        </NavLink>
                                        <div className='splash-recommended-info'>
                                            <NavLink to='#' className='splash-recommended-title'>{`${randomProjects[1]?.title}`}</NavLink>
                                            <span className='splash-recommended-funded'>100% funded</span>
                                            <span className='splash-image-author'>By {`${randomProjects[0]?.username}`}</span>
                                            <div className='splash-recommended-button-container'>
                                                <button className='splash-recommended-button'>
                                                    <svg className="splash-svg" viewBox="0 0 12 16">
                                                        <path d="M0 0h12v15.067c0 .166-.134.3-.3.3-.055 0-.11-.015-.156-.043l-5.5-3.338-5.59 3.343c-.142.084-.326.037-.41-.105-.03-.046-.044-.1-.044-.154V0zm1.8 1.8v10.627l4.25-2.542 4.15 2.517V1.8H1.8z" fill-rule="nonzero">
                                                        </path>
                                                    </svg>
                                                </button>
                                                <button className='splash-recommended-button'>
                                                    <svg className='splash-svg' viewBox='0 0 15 15'>
                                                        <path d="M8.875 2.1v1.85h4.984c.63 0 1.14.512 1.14 1.14 0 .097-.012.193-.036.285l-2.135 8.31c-.13.505-.585.858-1.105.858H3.2v-.005H.5c-.276 0-.5-.223-.5-.5V5.915c0-.276.224-.5.5-.5h2.882L4.19 3.09V1.208c0-.57.42-1.053.986-1.13 2.26-.31 3.7.312 3.7 2.024zM5.9 1.716v1.472c0 .128-.02.255-.062.375l-.706 2.026v7.243l6.15.002 1.842-7.17H8.59c-.787 0-1.426-.64-1.426-1.426V2.1c0-.307-.285-.47-1.263-.385zm-2.478 5.41h-1.71v5.703h1.71V7.125z" fill-rule="evenodd">
                                                        </path>
                                                    </svg>
                                                </button>
                                                <button className='splash-recommended-button'>
                                                    <svg className="splash-svg" viewBox="0 0 15 15">
                                                        <path d="M6.125 12.44v-1.848H1.14c-.63 0-1.14-.51-1.14-1.14 0-.097.012-.192.036-.285L2.17.857C2.3.353 2.756 0 3.276 0H11.8v.005h2.7c.276 0 .5.223.5.5v8.124c0 .275-.224.5-.5.5h-2.882l-.808 2.322v1.884c0 .57-.42 1.053-.986 1.13-2.26.31-3.7-.312-3.7-2.025zm2.974.388v-1.473c0-.127.02-.254.062-.375l.706-2.025V1.712h-6.15L1.876 8.88H6.41c.787 0 1.426.637 1.426 1.425v2.134c0 .31.285.474 1.263.388zm2.478-5.41h1.71V1.715h-1.71v5.703z" fill-rule="evenodd">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    }

    // <div className="splash_outmost_container">
    //     <div className="splash-page main_container">
    //         <SplashNav />
    //         <div className="featuredProj_outmost_container">
    //             <NavLink to={`/projects/${randomProjects[0]?.id}/comments`}>
    //                 <div key={0} className="featuredProj_inner_container">
    //                     <li className="featuredProject_label featureItem" > Featured Project </li>
    //                     <img className="featuredProject_img featureItem" src={randomProjects[0]?.image_src ? randomProjects[0]?.image_src : randomProjects[0]?.image_src} alt=""></img>
    //                     <p className="featuredProject_title featureItem">{randomProjects[0]?.title}</p>
    //                     <p className="featuredProject_subTitle featureItem">{randomProjects[0]?.description}</p>
    //                     <p className="featuredProject_owner featureItem">By {randomProjects[0]?.username} </p>
    //                 </div>
    //             </NavLink>
    //         </div>
    //         <div className="recommended_outmost_container">
    //             <div className="recommendedLabel_ctnr">
    //                 <p className="recommendedLabel">RECOMMENDED FOR YOU</p>
    //             </div>
    //             <div key={1} className="recommendedTwo_ctnr">
    //                 <NavLink to={`/projects/${randomProjects[1]?.id}/comments`}>
    //                     <img className="recommended_img rec_item" src={randomProjects[1]?.image_src ? randomProjects[1]?.image_src : randomProjects[1]?.image_src} alt="" />
    //                     <li className="recommended_title rec_item" >{randomProjects[1]?.title}</li>
    //                     <li className="recommended_goal rec_item" >{((randomProjects[1]?.current_funding / randomProjects[1]?.pledge_goal) * 100).toFixed(2)}% Funded</li>
    //                     <li className="recommended_owner rec_item" >By {randomProjects[1]?.username}</li>
    //                 </NavLink>
    //                 <div className="accessory_ctnr">
    //                     <div className="bookmark_ctnr">
    //                         <li className="bookmark_btn" >
    //                             <img className="boomark_img" src='https://www.clipartmax.com/png/small/473-4737744_bookmark-png-clipart-bookmark-icon-instagram.png' alt="" />
    //                         </li>
    //                     </div>
    //                     <div className="like_ctnr">
    //                         <li className="like_btn" >
    //                             <img className="like_img" src="https://aux2.iconspalace.com/uploads/thumbs-up-icon-256-1592257045.png" alt="" />
    //                         </li>
    //                     </div>
    //                     <div className="dislike_ctnr">
    //                         <li className="dislike_btn" >
    //                             <img className="dislike_img" src="https://aux2.iconspalace.com/uploads/thumbs-down-icon-256-470311744.png" alt="" />
    //                         </li>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div key={2} className="recommendedThree_ctnr">
    //                 <NavLink to={`/projects/${randomProjects[2]?.id}/comments`}>
    //                     <img className="recommended_img rec_item" src={randomProjects[2]?.image_src ? randomProjects[2]?.image_src : randomProjects[2]?.image_src} alt="" />
    //                     <li className="recommended_title rec_item" >{randomProjects[2]?.title}</li>
    //                     <li className="recommended_goal rec_item" >{((randomProjects[2]?.current_funding / randomProjects[2]?.pledge_goal) * 100).toFixed(2)}% Funded</li>
    //                     <li className="recommended_owner rec_item" >By {randomProjects[2]?.username}</li>
    //                 </NavLink>
    //                 <div className="accessory_ctnr">
    //                     <div className="bookmark_ctnr">
    //                         <li className="bookmark_btn" >
    //                             <img className="boomark_img" src='https://www.clipartmax.com/png/small/473-4737744_bookmark-png-clipart-bookmark-icon-instagram.png' alt="" />
    //                         </li>
    //                     </div>
    //                     <div className="like_ctnr">
    //                         <li className="like_btn" >
    //                             <img className="like_img" src="https://aux2.iconspalace.com/uploads/thumbs-up-icon-256-1592257045.png" alt="" />
    //                         </li>
    //                     </div>
    //                     <div className="dislike_ctnr">
    //                         <li className="dislike_btn" >
    //                             <img className="dislike_img" src="https://aux2.iconspalace.com/uploads/thumbs-down-icon-256-470311744.png" alt="" />
    //                         </li>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div key={3} className="recommendedFour_ctnr">
    //                 <NavLink to={`/projects/${randomProjects[3]?.id}/comments`}>
    //                     <img className="recommended_img rec_item" src={randomProjects[3]?.image_src ? randomProjects[3]?.image_src : randomProjects[3]?.image_src} alt="" />
    //                     <li className="recommended_title rec_item" >{randomProjects[3]?.title}</li>
    //                     <li className="recommended_goal rec_item" >{((randomProjects[3]?.current_funding / randomProjects[3]?.pledge_goal) * 100).toFixed(2)}% Funded</li>
    //                     <li className="recommended_owner rec_item" >By {randomProjects[3]?.username}</li>
    //                 </NavLink>
    //                 <div className="accessory_ctnr">
    //                     <div className="bookmark_ctnr">
    //                         <li className="bookmark_btn" >
    //                             <img className="boomark_img" src='https://www.clipartmax.com/png/small/473-4737744_bookmark-png-clipart-bookmark-icon-instagram.png' alt="" />
    //                         </li>
    //                     </div>
    //                     <div className="like_ctnr">
    //                         <li className="like_btn" >
    //                             <img className="like_img" src="https://aux2.iconspalace.com/uploads/thumbs-up-icon-256-1592257045.png" alt="" />
    //                         </li>
    //                     </div>
    //                     <div className="dislike_ctnr">
    //                         <li className="dislike_btn" >
    //                             <img className="dislike_img" src="https://aux2.iconspalace.com/uploads/thumbs-down-icon-256-470311744.png" alt="" />
    //                         </li>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
