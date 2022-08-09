import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import AboutForm from "../about/about";

function About() {

    const abouts = useSelector(store => store.about);
    console.log("about", abouts)
    const dispatch = useDispatch();

    console.log(abouts.length)

    useEffect(() => {
        dispatch({ type: "FETCH_ABOUT" });
    }, [dispatch]);


    return (
        <>
            <h1>about</h1>
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