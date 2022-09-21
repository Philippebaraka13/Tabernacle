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

    if (day == 'Tuesday' || day == "Wednesday" || day == "Friday") {
        return (

            <>
                <div>
                    <h1 className="time">SERVICE TODAY AT 6:30PM - 9:30PM</h1>
                    <h2 className="timeday">TODAY DATE</h2>
                    <h3 className="timeday">{date}</h3>
                    <h3 className="timeday">{time}</h3>
                    <h3 className="timeday">{wish}</h3>
                </div>
            </>
        )
    } else if (day == 'Sunday') {
        return (
            <>
                <div>
                   
                    <h1 className="time">SERVICE TODAY AT 9:30AM - 1:30PM</h1>
                    <h2 className="timeday">TODAY DATE</h2>
                    <h3 className="timeday">{date}</h3>
                    <h3 className="timeday">{time}</h3>
                    <h3 className="timeday">{wish}</h3>
                </div>
            </>
        )

    } else if (day == 'Monday') {
        return (
            <>
                <div >
                   
                    <h1 className="time">JOIN US TOMORROW AT 6:30PM - 9:30PM </h1>
                    <h2 className="time"> FOR PRAYER MEETING</h2>
                    <h2 className="timeday">TODAY DATE</h2>
                    <h3 className="timeday">{date}</h3>
                    <h3 className="timeday">{time}</h3>
                    <h3 className="timeday">{wish}</h3>
                </div>
            </>
        )
    } else if (day == 'Thursday') {
        return (
            <>
                <div >
                   
                    <h1 className="time">JOIN US TOMORROW SERVICE AT 6:30PM - 9:30PM</h1>
                    <h2 className="timeday">TODAY DATE</h2>
                    <h3 className="timeday">{date}</h3>
                    <h3 className="timeday">{time}</h3>
                    <h3 className="timeday">{wish}</h3>
                </div>
            </>
        )
    } else if (day == 'Saturday') {
        return (
            <>
                <div >
                  
                    <h1 className="time">JOIN US TOMORROW FOR SUNDAY SERVICE AT 9:30AM</h1>
                    <h2 className="timeday">TODAY DATE</h2>
                    <h3 className="timeday">{date}</h3>
                    <h3 className="timeday">{time}</h3>
                    <h3 className="timeday">{wish}</h3>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <h1>Not service today</h1>
                <h3>{date}</h3>
                <h3>{time}</h3>
                <h3>{wish}</h3>
            </>
        )

    }

};

export default UseDate;