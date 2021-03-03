import React, { Component } from 'react'
import ExpandableRow from '../Components/ExpandableRow'
import '../customCss/ExpandableRow.css'

export default class ExpandableRowContainer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="mainDiv">
                <ExpandableRow/>
            </div>
        )
    }
}

