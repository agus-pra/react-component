import React from 'react';

import Avatar from '../Avatar/Avatar';
// import Button from '../Button/Button';
import AvatarImage from '../../assets/avatar.jpg';
import {Button, Wrapper, Table, Tr, Td, Card, Img} from './cardMeetUp.style.js';

const CardMeetUp = ({location, members, organizer}) => {

  const thanksForJoin = () => {
    alert('Terima kasih sudah join meetup');
  }

  return (
      <Wrapper>
        <Img>
          <Avatar src={AvatarImage} alt="img avatar" />
        </Img>
        <Card>
          <h2>Hacktiv 8 Meetup</h2>
          <Table>
            <Tr>
              <Td>Location</Td><Td>{location}</Td>
            </Tr>
            <Tr>
              <Td>Members</Td><Td>{members}</Td>
            </Tr>
            <Tr>
              <Td>Organizer</Td><Td>{organizer}</Td>
            </Tr>
          </Table>
          <Button onClick={thanksForJoin}>JOINT US</Button>
          <Button primary onClick={thanksForJoin}>START</Button>
        </Card>
      </Wrapper>
  );
}

export default CardMeetUp;