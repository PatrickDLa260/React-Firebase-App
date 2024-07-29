"use client";
import { useEffect, useState } from "react";
import {getToken, isSupported } from "firebase/messaging";
import { messaging } from "../firebase";
import useNotificationPermission from "./useNotificationPermission";

const useFCMToken = () => {
    const permission = useNotificationPermission();
    const [fcmToken, setFcmToken] = useState<string | null>(null);

    useEffect(() => {
        const retrieveToken = async () => {
            if (typeof window !== "undefined" && "serviceWorker" in navigator) {
                if (permission === "granted") {
                    const isFCMSupported = await isSupported();
                    if (!isFCMSupported) return;
                    const fcmToken = await getToken(messaging(), {
                        vapidKey: "BDUZBpHxh2C-S3EPxoMJMSjHP23XCg0tO9DkRQBQdOyfPG9sGm-HFCCE1rygBheknkvsLLowuJ0Hqm4I-ZcHG00"
                    })
                    setFcmToken(fcmToken);
                }
            }
        };
        retrieveToken();
    }, [permission]);

    return fcmToken;
};

export default useFCMToken;