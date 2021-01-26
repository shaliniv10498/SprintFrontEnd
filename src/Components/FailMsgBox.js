import React from 'react'
import '../customCss/FailMsgBox.css'
export default function FailMsgBox(props) {
    return (
        <div id="failMsgBox" className="FailMsgBox">
            {props.message}
        </div>
    )
}
