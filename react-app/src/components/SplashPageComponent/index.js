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
    const randomProjIdxOne = Math.floor(Math.random() * (allProjects.length - 1 + 1) + 0)
    const randomProjIdxTwo = Math.floor(Math.random() * (allProjects.length - 1 + 1) + 0) - 1
    const randomProjIdxThree = Math.floor(Math.random() * (allProjects.length - 1 + 1) + 0)
    const randomProjIdxFour = Math.floor(Math.random() * (allProjects.length - 1 + 1) + 0)
    const randomProjIdxFive = Math.floor(Math.random() * (allProjects.length - 1 + 1) + 0)
    console.log(randomProjIdxTwo)
    console.log(randomProjIdxThree)
    console.log(randomProjIdxFour)




    const [featureId, setFeatureId] = useState()

    useEffect(() => {

        if (allProjects[randomProjIdxOne]?.image_src !== null) {
            setRender(true)
        }

        dispatch(projectAction.getAllProjects())
    }, [dispatch])




    return (
        <div className="splash_outmost_container">
            <div className="splash-page main_container">

                <SplashNav />
                {/* <iframe id='project-video' src={video_src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe> */}
                <div className="featuredProj_outmost_container">
                    <div className="featuredProj_inner_container">
                        <li className="featuredProject_label featureItem" > Featured Project </li>
                        {render ?
                            <img className="featuredProject_img featureItem" src={allProjects[randomProjIdxOne]?.image_src ? allProjects[randomProjIdxOne]?.image_src : allProjects[0]?.image_src}></img>
                            : <iframe className='featuredProject_video featureItem' src={allProjects[randomProjIdxOne]?.video_src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                        }
                        <p className="featuredProject_title featureItem">{allProjects[randomProjIdxOne]?.title}</p>
                        <p className="featuredProject_subTitle featureItem">{allProjects[randomProjIdxOne]?.description}</p>
                    </div>
                </div>
                <div className="recommended_outmost_container">
                    <div className="recommendedLabel_ctnr">
                        <p className="recommendedLabel">RECOMMENDED FOR YOU</p>
                    </div>
                    <div className="recommendedTwo_ctnr">
                        <img className="recommended_img rec_item" src={allProjects[randomProjIdxTwo]?.image_src ? allProjects[randomProjIdxTwo]?.image_src : allProjects[allProjects.length]?.image_src} alt="alt" />
                        <li className="recommended_title rec_item" >{allProjects[randomProjIdxTwo]?.title}</li>
                        <li className="recommended_goal rec_item" >${allProjects[randomProjIdxTwo]?.pledge_goal} Goal</li>
                        {/* <li className="recommended_description rec_item" >{allProjects[randomProjIdxTwo]?.description}</li> */}
                    </div>
                    <div className="recommendedThree_ctnr">
                        <img className="recommended_img rec_item" src={allProjects[randomProjIdxThree]?.image_src ? allProjects[randomProjIdxThree]?.image_src : allProjects[Math.floor(Math.random() * (allProjects.length - 1 + 1) + 0)]?.image_src} alt="alt" />
                        <li className="recommended_title rec_item" >{allProjects[randomProjIdxThree]?.title}</li>
                        <li className="recommended_goal rec_item" >${allProjects[randomProjIdxThree]?.pledge_goal} Goal</li>
                        {/* <li className="recommended_description rec_item" >{allProjects[randomProjIdxThree]?.description}</li> */}
                    </div>
                    <div className="recommendedFour_ctnr">
                        <img className="recommended_img rec_item" src={allProjects[randomProjIdxFour]?.image_src ? allProjects[randomProjIdxFour]?.image_src : allProjects[0]?.image_src} alt="alt" />
                        <li className="recommended_title rec_item" >{allProjects[randomProjIdxFour]?.title}</li>
                        <li className="recommended_goal rec_item" >${allProjects[randomProjIdxFour]?.pledge_goal} Goal</li>
                        {/* <li className="recommended_description rec_item" >{allProjects[randomProjIdxFour]?.description}</li> */}
                    </div>
                </div>
            </div>
        </div>
    )
}