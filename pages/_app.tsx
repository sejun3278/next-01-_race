import '../styles/globals.css'
import Head from "next/head";

import GlobalContext from "../src/common/components/GlobalContext/globalContext";

// 파이어베이스 설정
import { initializeApp } from '@firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
})
export const db = getFirestore();

function MyApp({ Component, pageProps } : any) {

  return (
    <>
      <Head>
        <link
          href="/fonts/noto-sans-korean-webfont/css/noto-sans-korean.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>

      <GlobalContext>
        <Component {...pageProps} />
      </GlobalContext>
    </>
  )
}

export default MyApp
