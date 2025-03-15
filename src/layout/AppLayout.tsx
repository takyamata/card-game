import React from 'react';
import styles from './AppLayout.module.scss';
import { Outlet } from 'react-router-dom';
import SideMenu from '@components/SideMenu/SideMenu';
import Main from '@components/Main/Main';

interface AppLayoutProps {}

const AppLayout: React.FC<AppLayoutProps> = () => {
    return (
        <div className={styles.root}>
            <SideMenu />
            <Main>
                <Outlet />
            </Main>
        </div>
    );
};

export default AppLayout;
