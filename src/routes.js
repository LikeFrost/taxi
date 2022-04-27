import { lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Login = lazy(() => import('@/pages/Login'));
const Company = lazy(() => import('@/pages/Company'));
const Driver = lazy(() => import('@/pages/Driver'));
const CarMessage = lazy(() => import('@/pages/CarMessage'));
const Search = lazy(() => import('@/pages/Search'));
const DriverMessage = lazy(() => import('@/pages/DriverMessage'));
const Question = lazy(() => import('@/pages/Question'));
const Traffic = lazy(() => import('@/pages/Traffic'));
const Car = lazy(() => import('@/pages/Car'));

const routerConfig = [
  {
    path: '/',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Dashboard,
      },
    ],
  },
  {
    path: '/company',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Company,
      },
    ],
  },
  {
    path: '/driver',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Driver,
      },
    ],
  },
  {
    path: '/drivermessage',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: DriverMessage,
      },
    ],
  },
  {
    path: '/carmessage',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: CarMessage,
      },
    ],
  },
  {
    path: '/car',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Car,
      },
    ],
  },
  {
    path: '/question',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Question,
      },
    ],
  },
  {
    path: '/traffic',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Traffic,
      },
    ],
  },
  {
    path: '/search',
    exact: true,
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Search,
      },
    ],
  },
  {
    path: '/login',
    exact: true,
    component: UserLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Login,
      },
    ],
  },
];
export default routerConfig;
