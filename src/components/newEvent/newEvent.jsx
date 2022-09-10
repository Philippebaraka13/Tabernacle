import React, { useState } from "react";
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// Material

// import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const NewEvent = (props) => {

    const dispatch = useDispatch();

    // const [dateNew, setDateNew] = useState('');
    const [address, setAddress] = useState('');
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [date, setDate] = useState(new Date());

    function getFormattedDate(date) {
        if (date === null) {
            return
        }
        let t = date.indexOf('T');
        let newDate = date.slice(0, t)
        return newDate;
    }

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

        <section>
            <h2>Enter New coming up </h2>
            <form onSubmit={addNew}>
                <div>
                    <h1>Title of the Event</h1>
                    <input type="text" placeholder="Title of Event" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div>
                    <h1>Location or Address</h1>
                    <input type="text" placeholder="Address" value={address} onChange={(event) => setAddress(event.target.value)} />
                </div>
                <div>
                    <h1>Comment</h1>
                    <textarea type="text" placeholder="Comment about the New" value={comment} onChange={(event) => setComment(event.target.value)}> </textarea>
                </div>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
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
            </form>

        </section>


    )
}
export default NewEvent;

