import React from 'react';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import favicon from './assets/img/favicon.png';

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset='utf-8' />
                <title>{props.title}</title>

                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta name="author" content={props.author} />
                <meta name="subject" content={props.subject} />
                <meta name="content-language" content="ko" />

                <meta property="og:url" content={props.url} />
                <meta property="og:title" content={props.title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={props.description} />
                <meta property="og:image" content={props.image} />

                <link rel="apple-touch-icon" sizes="57x57" href="%PUBLIC_URL%/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
                
            </Helmet>
        </HelmetProvider>
    );
};

Meta.defaultProps = {
    title: 'Large Bread Admin',
    description: 'Large Bread 관리자 페이지 입니다.',
    keywords: 'React',
    author: '한주애',
    subject: 'Large Bread 관리자 페이지 입니다.',
    url: window.location.href,
    image:favicon
};

export default Meta;