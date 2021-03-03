import React from 'react'
import '../customCss/Paging.css';
export default function PaginationToolBar(props){
  console.log(props.prevState);
    return(
        <div>
            <div>
                <button type="button" className = "nextPrevButton" onClick={props.firstClick}disabled = {props.prevState}>&laquo; </button>
                <button type="button" className = "nextPrevButton" onClick={props.prevClick} disabled = {props.prevState}>&#8249;</button>
                <input type="textfield" className="pageNumberTextField" value={props.currentPage} />
                <button type="button" className = "nextPrevButton" onClick={props.nextClick} disabled={props.nextState}>&#8250;</button>
                <button type="button" className = "nextPrevButton" onClick={props.lastClick} disabled={props.nextState}>&raquo;  </button>
            </div>
        </div>
    )
}