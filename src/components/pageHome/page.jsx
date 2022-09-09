import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import AboutForm from "../about/about";
import UseDate from "../time";

function About() {

    const news = useSelector(store => store.new);
    console.log("new", news)
    const dispatch = useDispatch();

    console.log(news.length)

    useEffect(() => {
        dispatch({ type: "FETCH_NEW" });
    }, [dispatch]);


    return (
        <>
            <h1>about</h1>
            <UseDate />
            {news.length !== undefined && news.map((index) => {
                return (
                    <div key={index.aboutpage}>
                        <h2>{index.aboutpage}</h2>
                    </div>
                )
            })
            }

        </>
    )

}


export default About;