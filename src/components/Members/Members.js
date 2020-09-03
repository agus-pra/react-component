import React from 'react';


import AvatarImages from '../../assets/avatar.jpg';
import Avatar from '../Avatar/Avatar';

import  './members.css';


const Members = (PropsMembers) => {
    return(
        <div >
            <div className="Membercss">
                <div > <Avatar className="AvatarMembers1" src={AvatarImages} alt={AvatarImages} /></div>
                
                <div className="Membercss2">
                <h2>Organizers</h2>
                <table>
               
                <tr>
                    <td>{PropsMembers.name}</td>
                    <td></td>
                    <td>{PropsMembers.sum}</td>
                </tr>
               
                </table>
               
               
                </div>
            </div>
        </div>
    )
}


export default Members;