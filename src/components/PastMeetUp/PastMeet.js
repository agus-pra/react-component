import React from 'react';
import Button from '../Button/Button';
import {Wrapper, Div, Btn} from './pastMeet.style.js';

const PastMeet = ({data}) => {
    return(
        <>
            {
                data.map((item) => (
                        <Wrapper>
                            <Div>
                            <b>{item.date}</b><br />
                            <hr></hr>
                            <b>{item.deskripsi}</b>
                            <br></br>
                            <p>{item.went} &nbsp;<text>went</text></p>
                            <Btn>
                            <Button textButton="View"/>
                            </Btn>
                            </Div>
                        </Wrapper>

                ))
            }
                
        </>
        
    )
}

export default PastMeet;