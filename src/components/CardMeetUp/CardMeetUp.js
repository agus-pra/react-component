import React from 'react';

import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import AvatarImage from '../../assets/avatar.jpg';
import './cardMeetUp.css';

const CardMeetUp = ({location, members, organizer}) => {

  const thanksForJoin = () => {
    alert('Terima kasih sudah join meetup');
  }

  return (
    <div>
      <div className="cardJoinUs">
        <div>
          <Avatar src={AvatarImage} alt="img avatar" />
        </div>
        <div className="cardJoinUs2">
          <h2>Hacktiv 8 Meetup</h2>
          <table>
            <tr>
              <td>Location</td><td>{location}</td>
            </tr>
            <tr>
              <td>Members</td><td>{members}</td>
            </tr>
            <tr>
              <td>Organizer</td><td>{organizer}</td>
            </tr>
          </table>
          <Button textButton="JOIN US" onClick={thanksForJoin}/>
        </div>
      </div>
    </div>
  );
}

export default CardMeetUp;