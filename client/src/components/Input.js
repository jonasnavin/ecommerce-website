import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ id, name }) => {
    const [err, setErr] = useState(false)
    const [val, setVal] = useState('')

    return (
        <TextField
        style={{margin: "5px", width: "60%"}}
            onBlur={() => val === "" ? setErr(true) : setErr(false)}
            error={err}
            required
            id={id}
            label={name}
            helperText={err ? "Required" : null}
            value={val}
            variant='outlined'
            size='small'
            color='secondary'
            onChange={event => {
                setVal(event.target.value)
                if (event.target.value !== ""){
                    setErr(false)
                }
                else if (event.target.value === ""){
                    setErr(true)
                }
            }}
        />
    );
}

export default Input