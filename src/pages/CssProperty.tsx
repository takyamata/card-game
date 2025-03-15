import HeadLine from '@components/Paragraph/HeadLine';
import Lead from '@components/Paragraph/Lead';
import Span from '@components/Paragraph/Span';
import React from 'react';
import { Link } from 'react-router-dom';

const CssProperty = () => {
    return (
        <div>
            <HeadLine text="CSS Property" />
            <Span text="ここではCSSの強力なプロパティについて学べます。" />
            <Span text="近年のCSSの進化は目まぐるしく、従来JavaScriptでしかできなかったようなスタイルがほんの数行で実現できるようになっていたりもします。" />
            <Span text="クールなスタイルを当てたいと思ったとき、すぐにJavaScriptで解決しようとするのではなく、まずはCSSで実現できないかを検討することをお薦めします。" />
            <Span text="なぜなら、JavaScriptは難しくてCSSは簡単だからです（主観）。" />
            <Span text="また、JavaScriptは様々はプログラムが複雑に絡み合うので意図しない結果になることが多々あります。" />
            <Span text="一方、CSSはスタイルにのみ責任を持つものなので、その範囲を超えて影響を与えることはありませんし、ゆえにスタイルの範疇では確実に機能します。" />
            <Span text="これらの理由から、見た目を作りたいのであればまずはCSSで模索するべきだと作者である私は考えます。" />
            <nav>
                <Link to="/css-property/position">Position</Link>
                <Link to="/css-property/display">Display</Link>
                <Link to="/css-property/margin-and-padding">
                    Margin & Padding
                </Link>
            </nav>
        </div>
    );
};

export default CssProperty;
