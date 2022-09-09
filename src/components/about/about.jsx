import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const AboutForm = (props) => {

    const [newInfo, setNewInfo] = useState('');
    const dispatch = useDispatch();
    const addAbout = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_NEW',
            payload: { new: newInfo }
        });
        setNewInfo('');

    };

    return (

        <section>
            <h2>Enter About The Page</h2>
            <form onSubmit={addAbout} >
                <div>
                    <textarea type="text" placeholder="New" value={newInfo} onChange={(event) => setAbout(event.target.value)} >
                    </textarea>
                </div>
                <button type="submit">
                    submit
                </button>
            </form>

        </section>


    )
}
export default AboutForm;

