import React from 'react'
import DropFileInput from '../drop-file-input/DropFileInput'

import './DragAndDrop.css'

function DragAndDrop() {

    const onFileChange = (files) => {
        console.log(files)
    }

    return (
        <div>
            <div className="box">
                <h3 className="drag-drop-header">
                    Upload the status
                </h3>
                <DropFileInput
                    onFileChange={(files) => onFileChange(files)}
                />
                <br />
            </div>
        </div>
    )
}

export default DragAndDrop