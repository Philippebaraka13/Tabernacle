import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UploadAndDisplayImage from "../picture/picture";
import PictureDisplay from "../picture1/picture1";

function Info() {

    const info = useSelector(store => store.newEvent);
    // const [date, setDate] = useState(new Date());
    console.log("newwwwwwwww", info);
    // console.log("dattttte",date.date)

    function getFormattedDate(date) {
        if (date === null) {
            return
        }
        let t = date.indexOf('T');
        let newDate = date.slice(0, t)
        return newDate;
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_NEW" });
    }, [dispatch]);

    return (

        <section>
             
            {info.length !== undefined && info.map((infos, index) => {
                let x = infos.date;
                console.log("daaate", x)
                x.split('T')
                let date = x.split('T')[0]
                return (
                    <div key={index}>
                        <h1>Title</h1>
                        <h3>{infos.title}</h3>
                        <h1>Address</h1>
                        <h3>{infos.address}</h3>
                        <h1>Date</h1>
                        <h3>{date}</h3>
                        <h1>Comment</h1>
                        <h3>{infos.comment}</h3>
                    </div>
                )
            })}

            <div>
            <PictureDisplay />
            </div>
        </section>





    )









}
export default Info;