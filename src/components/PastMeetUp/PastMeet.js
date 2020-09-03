import React from 'react';



import Button from '../Button/Button';

import  './pastMeet.css';

const PastMeet = (props) => {
    return(
        <div >
            <div className="PastMeetcss">
               
                <div className="PastMeetcss2">
                <b>{props.date}</b><br />
            <hr></hr>
            <b>{props.deskripsi}</b>
            <br></br>
            <p>{props.went} &nbsp;<text>went</text></p>

            <Button textButton="View"/>
                </div>
            </div>
        </div>
    )
}

export default PastMeet;