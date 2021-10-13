import React, { useEffect, useState, useContext } from 'react';
import * as projectAction from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';

import './SplashPageComponent.css'


export default function SplashPageComponent() {
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(projectAction.getProject(projectId))
    // }, [dispatch, projectId])

    return (
        <div>
            <h1>SplashPageComponent</h1>
            <div className="splash-page main_container">

            </div>
        </div>
    )
}