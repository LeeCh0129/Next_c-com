// 클라이언트 리다이렉트
"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

// router.push
// 현재주소가 localhost:3000/loLink-> localhost:3000/i/flow/login
// 뒤로가기 -> 로그인으로

// router.replace
// 현재주소가 localhost:3000/login -> localhost:3000/i/flow/login
// 까지는 똑같지만 뒤로가기 했을 때 다름 -> 로그인보다 더 전 localhost:3000으로 감.
