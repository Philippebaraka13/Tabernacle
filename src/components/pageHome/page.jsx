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
        <div className="upcoming">
            <>
                <h1 className="service">Service</h1>
                < UseDate />
                <div>
                    {event.length !== undefined && event.map((events, index) => {
                        return (
                            <div key={index} className="video">
                                <h1 className="link">Link for youtube service online</h1>
                                <h4><a href={events.link}>Youtube Link</a></h4>

                            </div>
                        )
                    })}

                    <form onSubmit={addEventFunction} className = "comment">
                        <div>
                            <textarea className="textarea" rows={10} cols={70} type="text" placeholder="Provide your Name, Email, and Comment if you need the link channel"
                             value={comment} onChange={(event) =>
                                setComment(event.target.value)} required>
                            </textarea>
                        </div>
                        <div >
                        <button className="form-submit-button" type="submit">
                            submit
                        </button>
                        </div>
                    </form>
                </div>
            </>
        </div>
    )

}


export default About;