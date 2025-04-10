import ReactQuery from "@/src/providers/ReactQuery";
import ReduxProvider from "@/src/providers/ReduxProvider";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQuery>
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    </ReactQuery>
  );
}
