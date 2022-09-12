import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UseDate from "../time/time";


function About() {

    const abouts = useSelector(store => store.about);
    const event = useSelector(store => store.event);
    const [comment, setComment] = useState('');
    console.log("about", abouts)
    const dispatch = useDispatch();

    const addEventFunction = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_EVENT',
            payload: {
                info: comment
            }
        })
        setComment('');
    }
    useEffect(() => {
        dispatch({ type: "FETCH_ABOUT" });
        dispatch({ type: "FETCH_EVENT" });
    }, [dispatch]);


    return (
        <>
            <h1>about</h1>
            <UseDate />
            <section>
                {event.length !== undefined && event.map((events, index) =>{
                    return (
                        <div key={index}>
                            <h1>Link for the youtube service online</h1>
                                <a href={events.link}>Youtube Link</a>

                        </div>
                    )
                })}

                <form onSubmit={addEventFunction}>
                    <div>
                        <textarea type="text" placeholder="Provide your Name, Email, and comment" value={comment} onChange={(event) =>
                            setComment(event.target.value)}>
                        </textarea>
                    </div>
                    <button type="submit">
                        submit
                    </button>
                </form>
            </section>

        </>
    )

}


export default About;