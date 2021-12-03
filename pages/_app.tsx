import '../styles/globals.css'
import Head from "next/head";

import { createContext, useState } from "react";
const GlobalContext = createContext({});

// 파이어베이스 설정
import { initializeApp } from '@firebase/app';
import 'firebase/firestore'

// let firebaseApp = {};
// if( typeof window !== "undefined" ) {
  export const firebaseApp = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  })  
// }


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
