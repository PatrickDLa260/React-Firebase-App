"use client";
import useFCM from "./utils/hooks/useFCM";

export default function Home() {
  const { messages, fcmToken, supported } = useFCM();

  if (!supported) {
    return <div>Firebase Cloud Messaging is not supported in this browser.</div>;
  }

  return (
    <div className="container flex flex-col items-center">
      <h1>FCM</h1>
      <p>FCM Token: {fcmToken}</p>
      {messages.map((message, index) => (
        <div key={index}>
          <h2>{message.notification?.title}</h2>
          <p>{message.notification?.body}</p>
        </div>
      ))}
    </div>
  );
}
