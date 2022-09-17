import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function PictureDisplay() {

    const image = useSelector(store => store.picture)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_PICTURE" })
    }, [dispatch]);
    {/* <h1>Upload and Display Image usign React Hook's</h1>
            {selectedImage && (
                <div>
                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <br /> */}

    return (

        <section>

            {image.length !== undefined && image.map((picture, index) => {

                return (

                    <div  key={index}>

                        <img alt={picture.picture} width={"250px"} src={`/upload/${picture.picture}`} />

                    </div>

                )

            })}




        </section>

    )

}
export default PictureDisplay;