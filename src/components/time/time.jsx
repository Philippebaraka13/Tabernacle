import { useEffect, useState } from "react";


const UseDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    console.log('daytodayday', day)

    if (day == 'Tuesday' || day == "Wednesday" || day == "Friday" || day == "Sunday") {
        return (
            <>
                <h1>service today at 6PM</h1>
                <h1>{date}</h1>
                <h1>{time}</h1>
                <h1>{wish}</h1>
            </>
        )
    } else {
        return (
            <>
                <h1>Not service today</h1>
                <h1>{date}</h1>
                <h1>{time}</h1>
                <h1>{wish}</h1>
            </>
        )

    }

};

export default UseDate;