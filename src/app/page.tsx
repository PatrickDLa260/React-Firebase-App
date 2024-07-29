"use client";
import useFCM from "./utils/hooks/useFCM";

export default function Home() {
  const { messages, fcmToken } = useFCM();

  return (
    <div className="container flex flex-col items-center">
      <h1>FCM</h1>
      <p>FCM Token: {fcmToken}</p>
    </div>
  )
}