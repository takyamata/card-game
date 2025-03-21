import { RouteObject } from 'react-router-dom';
import Home from '@pages/Home';
import Button from '@pages/Button';
import Link from '@pages/Link';
import CssProperty from '@pages/CssProperty';
import Other from '@pages/Other';
import Blog from '@pages/Blog';
import NoMatch from '@pages/NoMatch';
import Gsap from '@pages/Gsap';
import Scroll from '@components/Gsap/Scroll';
import About from '@components/About/About';
import Position from '@components/CssProperty/Position/Position';
import Display from '@components/CssProperty/Display/Display';
import MarginAndPadding from '@components/CssProperty/MarginAndPadding/MarginAndPadding';

// 既存のRouteObjectに含まれていないものは別途使で拡張する
type CustomRouteObject = RouteObject & {
    text?: string;
};

const parentRoutes: CustomRouteObject[] = [
    {
        path: '/',
        element: <Home />,
        index: true,
        text: 'Home',
    },
    {
        path: '/about',
        element: <About />,
        text: 'About',
    },
    {
        path: '/button',
        element: <Button />,
        text: 'Button',
    },
    {
        path: '/link',
        element: <Link />,
        text: 'Link',
    },
    {
        path: '/css-property',
        element: <CssProperty />,
        text: 'CSS-Property',
    },
    {
        path: '/gsap',
        element: <Gsap />,
        text: 'GSAP',
    },
    {
        path: '/other',
        element: <Other />,
        text: 'Other',
    },
    {
        path: '/blog',
        element: <Blog />,
        text: 'Blog',
    },
    {
        path: '*',
        element: <NoMatch />,
        text: '',
    },
];

const gsapRoutes: CustomRouteObject[] = [
    {
        path: '/gsap/scroll',
        element: <Scroll />,
        text: 'Scroll',
    },
];
const CssPropertyRoutes: CustomRouteObject[] = [
    {
        path: '/css-property/position',
        element: <Position />,
        text: 'Position',
    },
    {
        path: '/css-property/display',
        element: <Display />,
        text: 'Display',
    },
    {
        path: '/css-property/margin-and-padding',
        element: <MarginAndPadding />,
        text: 'Margin & Padding',
    },
];

export { parentRoutes, gsapRoutes, CssPropertyRoutes };
