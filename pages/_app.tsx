import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { AppProps } from "next/app";
// import type { ReactElement, ReactNode } from 'react'
// import type { NextPage } from 'next'

import 'nprogress/nprogress.css'; //styles of nprogress
import "@styles/global.css";
import "@styles/vars.css";

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const MComponent: any = Component;
    return (
        <MComponent {...pageProps} />
    );
}

// want to use multiple layouts, but still not working on the Per-Page Layouts
// export type NextPageWithLayout = NextPage & {
//     getLayout?: (page: ReactElement) => ReactNode
// }

// type AppPropsWithLayout = AppProps & {
//     Component: NextPageWithLayout
// }

// function MyApp({ Component, pageProps }: AppPropsWithLayout) {
//     // const getLayout = Component.getLayout || ((page) => page)
//     const getLayout = Component.getLayout ?? ((page) => page)

//     return getLayout(<Component {...pageProps} />);
// }

export default MyApp;
