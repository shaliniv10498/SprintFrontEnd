import React from 'react'
import '../customCss/MessageBox.css'

export default function MessageComponent(props) {
    return (
        <div id="msgCmp" className = "messageComponent">
            {props.message}
        </div>
    )
}
