import React, { useEffect, useState, useContext } from 'react';
import * as projectAction from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import SplashNav from './SplashNav';

import './SplashPageComponent.css'


export default function SplashPageComponent() {
    const dispatch = useDispatch()
    const allProjects = useSelector(state => Object.values(state.project))

    const [render, setRender] = useState(true);
    // console.log(typeof (allProjects))
    // console.log(allProjects)
    // const randomProjIdxTwo = Math.floor(Math.random() * (allProjects.length - 1 + 1))
    // const randomProjIdxThree = Math.floor(Math.random() * (allProjects.length))
    // const randomProjIdxFour = Math.floor(Math.random() * (allProjects.length))
    // const randomProjIdxFive = Math.floor(Math.random() * (allProjects.length - 1 + 1) + 0)


    // console.log(randomProjIdxTwo)
    // console.log(randomProjIdxThree)




    const [featureId, setFeatureId] = useState()

    useEffect(() => {

        // if (allProjects[randomProjIdxOne]?.image_src !== null) {
        //     setRender(true)
        // }
        // let i = 0;
        // let set = new Set()
        // while (i < 3) {
        //     const randomProjIdx = Math.random() * (allProjects.length - 1 + 1);
        //     if (set.has(randomProjIdx)) {
        //         console.log(randomProjIdx)
        //         i += 1
        //     }
        // }

        dispatch(projectAction.getRandomProjects())
        // dispatch(projectAction.getAllProjects())
    }, [dispatch])

    function helper() {
        dispatch(projectAction.getRandomProjects())
    }



    return (
        <div className="splash_outmost_container">
            <div className="splash-page main_container">
                <SplashNav />
                {/* <iframe id='project-video' src={video_src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe> */}
                <NavLink to={`/projects/${allProjects[0]?.id}`}>
                    <div className="featuredProj_outmost_container">
                        <div key={0} className="featuredProj_inner_container">
                            <li className="featuredProject_label featureItem" > Featured Project </li>
                            {render ?
                                <img className="featuredProject_img featureItem" src={allProjects[0]?.image_src ? allProjects[0]?.image_src : allProjects[0]?.image_src} alt="alt"></img>
                                : <iframe className='featuredProject_video featureItem' src={allProjects[0]?.video_src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                            }
                            <p className="featuredProject_title featureItem">{allProjects[0]?.title}</p>
                            <p className="featuredProject_subTitle featureItem">{allProjects[0]?.description}</p>
                            <p className="featuredProject_owner featureItem">By {allProjects[0]?.username} </p>
                        </div>
                    </div>
                </NavLink>
                <div className="recommended_outmost_container">
                    <div className="recommendedLabel_ctnr">
                        <p className="recommendedLabel">RECOMMENDED FOR YOU</p>
                    </div>
                    <NavLink to={`/projects/${allProjects[1]?.id}`}>
                        <div key={1} className="recommendedTwo_ctnr">
                            <img className="recommended_img rec_item" src={allProjects[1]?.image_src ? allProjects[1]?.image_src : allProjects[1]?.image_src} alt="alt" />
                            <li className="recommended_title rec_item" >{allProjects[1]?.title}</li>
                            <li className="recommended_goal rec_item" >${allProjects[1]?.pledge_goal} Goal</li>
                            <li className="recommended_owner rec_item" >By {allProjects[1]?.username}</li>
                            <div className="accessory_ctnr">
                                <div className="bookmark_ctnr">
                                    <li className="bookmark_btn" >
                                        <img class="boomark_img" src='/images/bookmark-icon-darker.png' alt="alt" />
                                    </li>
                                </div>
                                <div className="like_ctnr">
                                    <li className="like_btn" >
                                        <img class="like_img" src="/images/thumbs-up.png" alt="alt" />
                                    </li>
                                </div>
                                <div className="dislike_ctnr">
                                    <li className="dislike_btn" >
                                        <img class="dislike_img" src="/images/dislike.png" alt="alt" />
                                    </li>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to={`/projects/${allProjects[2]?.id}`}>
                        <div key={2} className="recommendedThree_ctnr">
                            <img className="recommended_img rec_item" src={allProjects[2]?.image_src ? allProjects[2]?.image_src : allProjects[2]?.image_src} alt="alt" />
                            <li className="recommended_title rec_item" >{allProjects[2]?.title}</li>
                            <li className="recommended_goal rec_item" >${allProjects[2]?.pledge_goal} Goal</li>
                            <li className="recommended_owner rec_item" >By {allProjects[2]?.username}</li>
                            <div className="accessory_ctnr">
                                <div className="bookmark_ctnr">
                                    <li className="bookmark_btn" >
                                        <img class="boomark_img" src='/images/bookmark-icon-darker.png' alt="alt" />
                                    </li>
                                </div>
                                <div className="like_ctnr">
                                    <li className="like_btn" >
                                        <img class="like_img" src="/images/thumbs-up.png" alt="alt" />
                                    </li>
                                </div>
                                <div className="dislike_ctnr">
                                    <li className="dislike_btn" >
                                        <img class="dislike_img" src="/images/dislike.png" alt="alt" />
                                    </li>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to={`/projects/${allProjects[3]?.id}`}>
                        <div key={3} className="recommendedFour_ctnr">
                            <img className="recommended_img rec_item" src={allProjects[3]?.image_src ? allProjects[3]?.image_src : allProjects[3]?.image_src} alt="alt" />
                            <li className="recommended_title rec_item" >{allProjects[3]?.title}</li>
                            <li className="recommended_goal rec_item" >${allProjects[3]?.pledge_goal} Goal</li>
                            <li className="recommended_owner rec_item" >By {allProjects[3]?.username}</li>
                            <div className="accessory_ctnr">
                                <div className="bookmark_ctnr">
                                    <li className="bookmark_btn" >
                                        <img class="boomark_img" src='/images/bookmark-icon-darker.png' alt="alt" />
                                    </li>
                                </div>
                                <div className="like_ctnr">
                                    <li className="like_btn" >
                                        <img class="like_img" src="/images/thumbs-up.png" alt="alt" />
                                    </li>
                                </div>
                                <div className="dislike_ctnr">
                                    <li className="dislike_btn" >
                                        <img class="dislike_img" src="/images/dislike.png" alt="alt" />
                                    </li>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}