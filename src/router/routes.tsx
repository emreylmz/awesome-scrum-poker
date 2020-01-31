import { AddStoryListPage } from '../pages'
import React from 'react'
import RouteModel from './routeModel'
// import { Route } from 'react-router'

const routes: [RouteModel] = [
  {
    path: '/',
    component: <AddStoryListPage />
  }
];

export default routes;
