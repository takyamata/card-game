import React from 'react';
import styles from './Position.module.scss';
import HeadLine from '@components/Paragraph/HeadLine';
import SubHeading from '@components/Paragraph/SubHeading';
import Span from '@components/Paragraph/Span';

interface PositionProps {}

const Position: React.FC<PositionProps> = ({}) => {
    return (
        <>
            <div className={styles.root}>
                <HeadLine text="Position" />
                <SubHeading text="positionとはなにか？" />
                <Span text="positionは字のごとく「配置」を決めるプロパティです。" />
                <Span text="「配置」を決めるには必ず「基準」が必要です。" />
                <Span text="なんとなくコーディングをしてもきれいに配置されるのは「基準の初期値」が初めから設定されているからです。" />
                <Span text="つまり、配置について記述していなくても初期値によりある程度配置が整えられているのです。「必ず」基準が必要といった理由がここにあります。基準がなければ要素の位置を決めることはできません。" />
                <Span text="そして、その「基準（配置）」を決めるのがpositionというわけです。" />
            </div>
        </>
    );
};

export default Position;
