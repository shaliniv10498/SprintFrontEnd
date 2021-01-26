import React from 'react'
import '../customCss/Paging.css';
export default function PaginationToolBar(props){
  
    return(
        <div>
            <label>
                <button type="button" className = "pagingButton" onClick={props.firstClick}>&laquo; </button>
                <button type="button" className = "nextPrevButton" onClick={props.prevClick} disabled = {props.prevState}>&#8249;</button>
                <input type="textfield" className="pageNumberTextField" value={props.currentPage}/>
                <button type="button" className = "nextPrevButton" onClick={props.nextClick} disabled={props.nextState}>&#8250;</button>
                <button type="button" className = "pagingButton" onClick={props.lastClick}>&raquo;  </button>
            </label>
        </div>
    )
}