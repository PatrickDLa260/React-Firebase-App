"use client";
import { useEffect, useState } from "react";
import { getToken, isSupported } from "firebase/messaging";
import { messaging } from "../firebase";
import useNotificationPermission from "./useNotificationPermission";

type ExtendedNotificationPermission = NotificationPermission | "unsupported";

const useFCMToken = () => {
    const permission = useNotificationPermission() as ExtendedNotificationPermission;
    const [fcmToken, setFcmToken] = useState<string | null>(null);

    useEffect(() => {
        const retrieveToken = async () => {
            if (typeof window !== "undefined" && "serviceWorker" in navigator && permission !== "unsupported") {
                if (permission === "granted") {
                    try {
                        const isFCMSupported = await isSupported();
                        if (!isFCMSupported) return;
                        const fcmToken = await getToken(messaging(), {
                            vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
                        });
                        setFcmToken(fcmToken);
                    } catch (error) {
                        console.error("An error occurred while retrieving FCM token:", error);
                    }
                }
            }
        };
        retrieveToken();
    }, [permission]);

    return fcmToken;
};

export default useFCMToken;
