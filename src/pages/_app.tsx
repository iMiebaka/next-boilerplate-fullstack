import 'nprogress/nprogress.css'; 
import "../styles/globals.css";

import ReactQuery from "@/src/providers/ReactQuery";
import ReduxProvider from "@/src/providers/ReduxProvider";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from 'nprogress'; 



Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQuery>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </ReactQuery>
  );
}
