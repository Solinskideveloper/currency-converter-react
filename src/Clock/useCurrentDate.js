import { useState, useEffect } from "react";

const formatDate =
{
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
};

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [date]);

    const formattedDate = date.toLocaleString(undefined, formatDate);

return formattedDate;
};