import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ id, name, formData, setFormData }) => {
    const [err, setErr] = useState(false)

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [id]: e.target.value
        }))
        if (e.target.value !== "") {
            setErr(false)
        }
        else if (e.target.value === "") {
            setErr(true)
        }
    }

    const handleBlur = () => {
        if (formData[id] === "")
            setErr(true)
        else
            setErr(false)
    }

    return (
        <TextField
            style={{ margin: "5px", width: "300px" }}
            error={err}
            required
            id={id}
            label={name}
            helperText={err ? "Required" : null}
            value={formData[id]}
            variant='outlined'
            size='small'
            color='secondary'
            onBlur={handleBlur}
            onChange={e => handleChange(e)}
        />
    );
}

export default Input