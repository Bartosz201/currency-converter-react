import { useEffect, useState } from "react";

export const useCurrentDate = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return time
}

export const getFormatedDate = (date) => {
    return date.toLocaleString(undefined,
        {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit"
        })
}