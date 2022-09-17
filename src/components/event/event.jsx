import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment'
import UploadAndDisplayImage from "../picture/picture";
// Materail Ui


const EventFunction = (props) => {

    const dispatch = useDispatch();

    const [link, setLink] = useState('');
    const [date, setDate] = useState(new Date());

    const addEvent = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_EVENT',
            payload: {
                link: link,
                date: date
            }
        });
        setLink('');
        setDate('');
        // setComment('');
    }

    return (

        <section>
            <h2>Upcoming event</h2>
            <form onSubmit={addEvent}>
                <div>
                    <input type="text" placeholder="link" value={link} onChange={(event) => setLink(event.target.value)}  required />
                </div>
                <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            required
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

export default EventFunction;