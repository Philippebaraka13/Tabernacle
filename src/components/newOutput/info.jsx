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
                <figure className="figureinfo">
                    <h1 className="info1">announcement</h1>
                </figure>
                {info.length !== undefined && info.map((infos, index) => {
                    let x = infos.date;
                    console.log("daaate", x)
                    x.split('T')
                    let date = x.split('T')[0]
                    return (
                        <>

                            <div key={index} className="info3" >

                                <div className="info4">
                                    {/* <h1 className="info5">Title</h1> */}
                                    <dl>
                                    <dd className="info5">{infos.title}</dd>
                                    {/* <h1 className="info5">Address</h1> */}
                                    <dd>{infos.address}</dd>
                                    {/* <h1 className="info5">Date</h1> */}
                                    <dd>{date}</dd>
                                    {/* <h1 className="info5">Comment</h1> */}
                                    <dd className="ptag">{infos.comment}</dd>
                                    {/* <PictureDisplay className="info1" /> */}
                                    </dl>
                                </div>
                            </div>

                        </>
                    )
                })}




            </section>
        </>
    )









}
export default Info;