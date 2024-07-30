import { useEffect, useState } from "react";
import useFCMToken from "./useFCMToken";
import { messaging } from "../firebase";
import { MessagePayload, onMessage, isSupported } from "firebase/messaging";
import { toast } from "react-toastify";

const useFCM = () => {
    const fcmToken = useFCMToken();
    const [messages, setMessages] = useState<MessagePayload[]>([]);
    const [supported, setSupported] = useState<boolean>(true);

    useEffect(() => {
        const checkSupport = async () => {
            if (typeof window !== "undefined" && "serviceWorker" in navigator) {
                try {
                    const messagingSupported = await isSupported();
                    setSupported(messagingSupported);
                } catch (error) {
                    console.error("Error checking messaging support:", error);
                    setSupported(false);
                }
            } else {
                setSupported(false);
            }
        };

        checkSupport();

        if (supported) {
            const fcmmessaging = messaging();
            const unsubscribe = onMessage(fcmmessaging, (payload) => {
                toast.dark(payload.notification?.title);
                setMessages((messages) => [...messages, payload]);
            });
            return () => unsubscribe();
        }
    }, [fcmToken, supported]);

    return { fcmToken, messages, supported };
};

export default useFCM;
