import { AddStoryListPage, ViewPlaningAsDeveloperPage, ViewPlaningAsScrumMasterPage } from '../pages'
import { RouteModel } from './routeModel'

const routes: RouteModel[] = [
  {
    path: '/',
    component: AddStoryListPage
  },
  {
    path: '/poker-planing-view-as-scrum-master',
    component: ViewPlaningAsScrumMasterPage
  },
  {
    path: '/poker-planing-view-as-developer/:sprintId',
    component: ViewPlaningAsDeveloperPage
  }
]

export default routes
