import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import UploadAndDisplayImage from "../picture/picture";
const NewEvent = (props) => {

    const dispatch = useDispatch();

    // const [dateNew, setDateNew] = useState('');
    const [address, setAddress] = useState('');
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState(new Date());

    

    const addNew = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_NEW',
            payload: {
                date: date,
                address: address,
                title: title,
                comment: comment
            }
        });
        setDate('');
        setAddress('');
        setTitle('');
        setComment('');


    };

    return (

        <section className="event">
            <h2></h2>
            <form onSubmit={addNew}>
                <div>
                    <h3>Title of the Event</h3>
                    <input type="text" placeholder="Title of Event" value={title} onChange={(event) => setTitle(event.target.value)} required />
                </div>
                <div>
                    <h3>Location or Address</h3>
                    <input type="text" placeholder="Address" value={address} onChange={(event) => setAddress(event.target.value)} required />
                </div>
                <div>
                    <h3>Comment</h3>
                    <textarea  rows={10}  cols={100} type="text" placeholder="Comment about the New" value={comment} onChange={(event) => setComment(event.target.value)} required> </textarea>
                </div>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            required 
                            // variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal" 
                            // id="date-picker-inline"
                            // label="Date picker inline" 
                            value={date}
                            onChange={(date) => setDate(date)}
                            KeyboardButtonProps={{
                                'aria-label': 'change date', 
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>

                <button type="submit">
                    submit
                </button>
                <div>
                <UploadAndDisplayImage /> 
                </div>
            </form>

        </section>
        

    )
}
export default NewEvent;

