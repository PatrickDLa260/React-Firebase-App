"use client";
import { useEffect, useState } from "react";

// Extend NotificationPermission type to include "unsupported"
type ExtendedNotificationPermission = NotificationPermission | "unsupported";

const useNotificationPermissionStatus = () => {
    const [permission, setPermission] = useState<ExtendedNotificationPermission>("default");

    useEffect(() => {
        if ("Notification" in window) {
            const handler = () => setPermission(Notification.permission as ExtendedNotificationPermission);
            handler();
            Notification.requestPermission().then(handler);

            navigator.permissions
                .query({ name: "notifications" })
                .then((notifactionPerm) => {
                    notifactionPerm.onchange = handler;
                });
        } else {
            setPermission("unsupported");
        }
    }, []);

    return permission;
};

export default useNotificationPermissionStatus;
