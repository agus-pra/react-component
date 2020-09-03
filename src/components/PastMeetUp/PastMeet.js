import React from 'react';
import Button from '../Button/Button';

import  './pastMeet.css';

const PastMeet = ({data}) => {
    return(
        <>
            {
                data.map((item) => (
                        <div className="PastMeetcss">
                            <div className="PastMeetcss2">
                            <b>{item.date}</b><br />
                            <hr></hr>
                            <b>{item.deskripsi}</b>
                            <br></br>
                            <p>{item.went} &nbsp;<text>went</text></p>

                            <Button textButton="View"/>
                            </div>
                        </div>

                ))
            }
                
        </>
        
    )
}

export default PastMeet;