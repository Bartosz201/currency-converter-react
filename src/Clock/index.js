import { useEffect, useState } from "react";
import { Paragraph } from "./styled";

const Clock = () => {
    const useCurrentDate = () => {
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

    const date = useCurrentDate();

    const FormatedTime = date.toLocaleString(undefined,
        {
            weekday: "long", day: "numeric", month: "long",
            hour: "numeric", minute: "2-digit", second: "2-digit"
        })

    return (
        <Paragraph className="clock">
            Dzisiaj jest {FormatedTime}
        </Paragraph>
    );
};

export default Clock;