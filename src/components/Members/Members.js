import React from 'react';


import AvatarImages from '../../assets/avatar.jpg';
import Avatar1 from '../Avatar1/Avatar1';
import {Wrapper, Card} from './members.style.js';


const Members = ({name, sum}) => {
    return(
        <div >
            <Wrapper>
                <div > <Avatar1 src={AvatarImages} alt={AvatarImages} /></div>
                
                <Card>
                    <h2>Organizers</h2>
                    <table>
                
                    <tr>
                        <td>{name}</td>
                        <td></td>
                        <td>{sum}</td>
                    </tr>
                
                    </table>
                
                
                    </Card>
            </Wrapper>
        </div>
    )
}


export default Members;