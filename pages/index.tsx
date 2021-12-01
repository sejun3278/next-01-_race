import Router from "next/router";
import { useEffect } from "react";

export default function Home() {

  useEffect( () => {
    // 홈으로 이동하기
    Router.push("/home")
  }, [])

  return (
    <div />
  )
}
