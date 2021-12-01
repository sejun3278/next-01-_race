import '../styles/globals.css'
import Head from "next/head";

import { createContext, useState } from "react";
const GlobalContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [ userInfo, setUserInfo ] = useState({});


  const value = {
    userInfo,
    setUserInfo
  }

  return (
    <div>
      <Head>
        <link
          href="/fonts/noto-sans-korean-webfont/css/noto-sans-korean.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <GlobalContext.Provider value={value}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </div>
  )
}

export default MyApp
