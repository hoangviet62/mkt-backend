import type { AppProps } from "next/app";
import Head from "next/head";
import Layouts from "@containers/layouts";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>LamDep</title>
      </Head>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

export default App;
