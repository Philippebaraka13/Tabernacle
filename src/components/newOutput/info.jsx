import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Info (){

    const info = useSelector(store => store.newEvent);
    console.log("newwwwwwwww", info);
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch({type: "FETCH_NEW"});
    }, [dispatch]);

    return (

        <section>
            {info.length !== undefined && info.map((infos, index) =>{
                return (
                    <div key={index}>
                        <h1>Title:{infos.title}</h1>
                        <h1>Address:{infos.address}</h1>
                        <h1>Date:{infos.date}</h1>
                        <h1>Comment:{infos.comment}</h1>

                    </div>
                )
            })}
        </section>





    )









}
export default Info;