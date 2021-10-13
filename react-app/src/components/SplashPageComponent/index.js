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
    console.log(allProjects.length)
    const allProj = []
    useEffect(() => {
        for (let key in allProjects) {
            allProj.push(allProjects[key])
        }
        console.log(allProj, '----------------------')
    }, [dispatch, allProjects, allProj])
    const randomProjIdx = Math.floor(Math.random() * (allProjects.length - 1 + 1) + 0)
    console.log(randomProjIdx)



    const [featureId, setFeatureId] = useState()

    useEffect(() => {
        dispatch(projectAction.getAllProjects())
    }, [dispatch])

    // const allProjectsNoFeatured = allProjects?.map(project => project.id = featureId)


    return (
        <div className="splash_outmost_container">
            <div className="splash-page main_container">

                <SplashNav />
                <div className="featuredProj_outmost_container">
                    <div className="featuredProj_inner_container">
                        <li className="featuredProject_label featureItem" > Featured Project </li>
                        <img className="featuredProject_img featureItem" src={allProjects[randomProjIdx]?.image_src}></img>
                        <p className="featuredProject_title featureItem">{allProjects[randomProjIdx]?.title}</p>
                        <p className="featuredProject_subTitle featureItem">{allProjects[randomProjIdx]?.description}</p>
                        {/* <p className="featuredProject_subTitle featureItem">{allProjects[randomProjIdx]?.description}</p> */}

                    </div>
                </div>
                <div className="recommended_outmost_container">
                    <div>
                        <p>RECOMMENDED FOR YOU</p>
                    </div>
                    <div className="recommended_container" >





                    </div>
                </div>
            </div>
        </div>
    )
}