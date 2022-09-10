import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UseDate from "../time/time";
// import AboutForm from "../about/about";

function About() {

    const abouts = useSelector(store => store.about);
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

    }, [dispatch]);


    return (
        <>
            <h1>about</h1>
            <UseDate />
            <section>
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
            {abouts.length !== undefined && abouts.map((about) => {
                return (
                    <div key={about.aboutpage}>
                        <h2>{about.aboutpage}</h2>
                    </div>
                )
            })
            }

        </>
    )

}


export default About;