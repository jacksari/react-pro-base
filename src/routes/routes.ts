import { lazy, LazyExoticComponent } from 'react';
import LazyloadPage from '../01-lazyload/pages/LazyloadPage1';

type JSXComponnt = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    component: LazyExoticComponent<JSXComponnt> | JSXComponnt,
    name: string,
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPag1" */ '../01-lazyload/pages/LazyloadPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPag2" */ '../01-lazyload/pages/LazyloadPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPag3" */ '../01-lazyload/pages/LazyloadPage3'));
const Lazy4 = lazy(() => import(/* webpackChunkName: "LazyPag4" */ '../01-lazyload/pages/LazyloadPage4'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: LazyloadPage,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: Lazy3,
        name: 'Lazy 3'
    },
    {
        to: '/lazy4',
        path: 'lazy4',
        component: Lazy4,
        name: 'Lazy 4'
    }
]