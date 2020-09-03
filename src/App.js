import React from 'react';
import Select from 'react-select'

import CardMeetUp from './components/CardMeetUp/CardMeetUp';
import MeetUp from './components/NextMeetUp/MeetUp';
import Members from './components/Members/Members';
import PastMeet from './components/PastMeetUp/PastMeet';
import Button from './components/Button/Button';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="menu">
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>

      {/* Call component */}
      <CardMeetUp location="Medan, Indonesia" members="180" organizer="ReactJs"/>
      <h2>Next MeetUp</h2>

      <MeetUp title="Awesome Meetup and event"/>
      <h2>About Meetup</h2>
        <div className="text1">
          <p> 
            Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br /><br />
            Twitter: @JakartaJS and we user the hashtag #jakartajs
          </p>
          <br />
        </div>
        <div>
          <h2>Members</h2> 
          <text className="SeeAll">See all</text><br />
        </div>

    < Members name="Agus Prabowo" sum="105 .others" />
    <h2>Past Meetup</h2> 
    <text className="SeeAll">See all</text><br />

 

  <div class="flex-container">
  <div> <PastMeet date="27 November 2017" deskripsi="#39 JakartaJS April Meetup with Kumparan" went="139"/></div>
  <div> <PastMeet date="27 Oktober 2017" deskripsi="#38 JakartaJS April Meetup with Blibli  and other" went="113"/></div>
  <div> <PastMeet date="27 September 2017" deskripsi="#37 JakartaJS April Meetup with Hacktiv8" went="110"/></div>  
      
  </div>
  </div>
  );
}

export default App;
