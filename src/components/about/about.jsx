import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const AboutForm = (props) => {

    const [about, setAbout] = useState('');
    const dispatch = useDispatch();
    const addAbout = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_ABOUT',
            payload: { about: about }
        });
        setAbout('');

    };

    return (

        <section>
            <h2>Enter About The Page</h2>
            <form onSubmit={addAbout} >
                <div>
                    <input type="text" placeholder="About" value={about} onChange={(event) => setAbout(event.target.value)} />
                </div>
                <button type="submit">
                    submit
                </button>
            </form>

        </section>


    )
}
export default AboutForm;

