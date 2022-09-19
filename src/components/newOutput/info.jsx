import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UploadAndDisplayImage from "../picture/picture";
import PictureDisplay from "../picture1/picture1";
import Houston from '../../image/Houston.png'


function Info() {

    const info = useSelector(store => store.newEvent);
    // const [date, setDate] = useState(new Date());
    console.log("newwwwwwwww", info);
    // console.log("dattttte",date.date)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_NEW" });
    }, [dispatch]);

    return (
        <>
            <section className="info2">
                {/* <div className="image1" >
                    <img className="img" src={Houston} />
                </div> */}
                {info.length !== undefined && info.map((infos, index) => {
                    let x = infos.date;
                    console.log("daaate", x)
                    x.split('T')
                    let date = x.split('T')[0]
                    return (
                        <>
                           
                            <figure className="info" >
                            <div key={index} >

                                <h1 className="info1">Title</h1>
                                <h3 className="info1">{infos.title}</h3>
                                <h1 className="info1">Address</h1>
                                <h3 className="info1">{infos.address}</h3>
                                <h1 className="info1">Date</h1>
                                <h3 className="info1">{date}</h3>
                                <h1 className="info1">Comment</h1>
                                <h3 className="info1">{infos.comment}</h3>
                                <PictureDisplay className="info1" />
                            </div>
                            </figure>
                        </>
                    )
                })}




            </section>
        </>
    )









}
export default Info;