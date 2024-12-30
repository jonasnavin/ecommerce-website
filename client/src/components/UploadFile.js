import React, { useContext } from 'react'
import DataContext from '../context/DataContext';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const UploadFile = () => {

    const { handleFileChange } = useContext(DataContext)

    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<FaCloudUploadAlt />}
        >
            Upload files
            <VisuallyHiddenInput
                type="file"
                required
                onChange={handleFileChange}
                multiple
            />
        </Button>
    );
}

export default UploadFile