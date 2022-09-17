import React, { useState } from "react";
import { useDispatch } from "react-redux";

const UploadAndDisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();

    const addPicture = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PICTURE',
            payload: {
                picture: selectedImage
            }
        });
    }

    return (
        <div>
            {/* <h1>Upload and Display Image usign React Hook's</h1>
            {selectedImage && (
                <div>
                    <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <br /> */}
            <section>
                <form onSubmit={addPicture}>
                <br />
                <input
                    type="file"
                    name="myImage"
                    value={selectedImage}
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                        setSelectedImage(event.target.value)
                    }}
                />
                <button type="submit">
                    Submit
                </button>
                </form>
            </section>
        </div>
    );
};

export default UploadAndDisplayImage;