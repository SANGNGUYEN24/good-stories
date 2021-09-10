/**
 * @author sangnd
 * @date 09/09/2021
 * Upload form for user to upload photo
 */

import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    // Set the types to make sure the file is a image not mp4 or mp4 for example
    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0]

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please select an image file (png or jpeg)')

        }
    }

    return (
        <form>
            <label>
                <input type='file' onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;