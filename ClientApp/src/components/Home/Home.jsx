import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// --- MUI --- // 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import {
    sxHomeContent,
    sxFormControl,
    sxTextInput,

} from '../_sxStyles/_sxStyles';

function Home() {

    const [what, setWhat] = useState('');
    const [where, setWhere] = useState('');
    const [notes, setNotes] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();



    const getEvent = (event) => {
        event.preventDefault();

        dispatch({
            type: 'FETCH_EVENT_LOG',
            payload: {
                what: what,
                where: where,
                notes: notes
            },
        });
          dispatch({ type: 'FETCH_EVENT_LOG' });
        //   dispatch({ type: 'FETCH_PHOTOS' });
        // window.location.reload(false);
    }; // getEvent


    const postEvent = (event) => {
        event.preventDefault();

        dispatch({
            type: 'POST_EVENT',
            payload: {
                what: what,
                where: where,
                notes: notes
            },
        });
          dispatch({ type: 'POST_EVENT' });
        //   dispatch({ type: 'FETCH_PHOTOS' });
        // window.location.reload(false);
    }; // getEvent

    return (
        <Box sx={sxHomeContent}>
            <FormControl sx={sxFormControl} onSubmit={postEvent}>
                <TextField sx={sxTextInput}
                    id="test"
                    type="text"
                    required
                    autoComplete='off'
                    label="What ya do?"
                    value={what}
                    onChange={(event) => setWhat(event.target.value)}
                />
                <TextField sx={sxTextInput}
                    id="test"
                    type="text"
                    required
                    autoComplete='off'
                    label="Location?"
                    value={where}
                    onChange={(event) => setWhere(event.target.value)}
                />
                <TextField sx={sxTextInput}
                    id="test"
                    type="text"
                    required
                    autoComplete='off'
                    label="Notes / Experience / Thoughts"
                    multiline
                    rows={6}
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                />

                <Button type="submit" size="large" variant="contained" color="primary">Submit</Button>
            </FormControl>
        </Box>
    );
}

export default Home;