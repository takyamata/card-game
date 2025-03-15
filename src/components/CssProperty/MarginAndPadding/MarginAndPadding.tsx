import React from 'react';
import styles from './MarginAndPadding.module.scss';
import HeadLine from '@components/Paragraph/HeadLine';

interface MarginAndPaddingProps {}

const MarginAndPadding: React.FC<MarginAndPaddingProps> = ({}) => {
    return (
        <>
            <div className={styles.root}>
                <HeadLine text="Margin & Padding" />
            </div>
        </>
    );
};

export default MarginAndPadding;
