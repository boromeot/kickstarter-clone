import React, { useEffect, useState, useContext } from 'react';
import * as projectAction from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import SplashNav from './SplashNav';

import './SplashPageComponent.css'


export default function SplashPageComponent() {
    const dispatch = useDispatch()
    const allProjects = useSelector(state => state.project)
    const [render, setRender] = useState(true);
    console.log(typeof (allProjects))
    const randomProjIdx = Math.floor(Math.random() * (allProjects.length - 1 + 1) + 0)
    console.log(randomProjIdx)



    const [featureId, setFeatureId] = useState()

    useEffect(() => {
        if (allProjects[randomProjIdx]?.image_src !== null) {
            setRender(true)
        }
        dispatch(projectAction.getAllProjects())
    }, [dispatch])


    // const allProjectsNoFeatured = allProjects?.map(project => project.id = featureId)


    return (
        <div className="splash_outmost_container">
            <div className="splash-page main_container">

                <SplashNav />
                {/* <iframe id='project-video' src={video_src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe> */}
                <div className="featuredProj_outmost_container">
                    <div className="featuredProj_inner_container">
                        <li className="featuredProject_label featureItem" > Featured Project </li>
                        {render ?
                            <iframe className='featuredProject_video featureItem' src={allProjects[randomProjIdx]?.video_src} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                            : <img className="featuredProject_img featureItem" src={allProjects[randomProjIdx]?.image_src}></img>
                        }
                        <p className="featuredProject_title featureItem">{allProjects[randomProjIdx]?.title}</p>
                        <p className="featuredProject_subTitle featureItem">{allProjects[randomProjIdx]?.description}</p>
                        {/* <p className="featuredProject_subTitle featureItem">{allProjects[randomProjIdx]?.description}</p> */}

                    </div>
                </div>
                <div className="recommended_outmost_container">
                    <div>
                        <p>RECOMMENDED FOR YOU</p>
                    </div>
                    {allProjects?.map(project => {

                        console.log(project.title)
                    }
                    )}
                </div>
            </div>
        </div>
    )
}