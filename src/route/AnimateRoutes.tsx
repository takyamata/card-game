import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AppLayout from '@layout/AppLayout';
import { parentRoutes, gsapRoutes, CssPropertyRoutes } from '@route/routes';

const AnimateRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                {/* 第二階層 */}
                {parentRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        index={route.index}
                    />
                ))}
                {/* 第三階層 Gsap */}
                {gsapRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        index={route.index}
                    />
                ))}
                {/* 第三階層 css-property */}
                {CssPropertyRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        index={route.index}
                    />
                ))}
            </Route>
        </Routes>
    );
};

export default AnimateRoutes;
