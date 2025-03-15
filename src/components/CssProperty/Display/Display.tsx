import React from 'react';
import styles from './Display.module.scss';
import HeadLine from '@components/Paragraph/HeadLine';

interface DisplayProps {}

const Display: React.FC<DisplayProps> = ({}) => {
    return (
        <>
            <div className={styles.root}>
                <HeadLine text="Display" />
            </div>
        </>
    );
};

export default Display;
