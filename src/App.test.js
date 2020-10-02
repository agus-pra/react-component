import React from 'react';

import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import CardMeetUp from './components/CardMeetUp/CardMeetUp';

import App from './App';

it('Pages App running without crash', () => {
  shallow(<App />);
});

describe('Test Header CardMeetup', () => {
  it('accept user account props', () => {
    const wrapper = mount(<CardMeetUp location="Medan, Indonesia" members="180" organizer="ReactJs" />);
    const heading = wrapper.find("h2").text();
    expect(heading).toEqual("Hacktiv8 Meetup");
  });
});


// describe('Test component CardMeetup', () => {
//   it('accept component', () => {
//     const wrapper = mount(<CardMeetUp location="Medan, Indonesia" members="180" organizer="ReactJs" />);
//     const   Td = wrapper.find("Td").text();
//     expect(Td).toEqual("Location");
//   });
// });


it("renders correctly", () => {
  const tree = mount(<CardMeetUp location="Medan, Indonesia" members="180" organizer="ReactJs" />);
  expect(toJson(tree)).toMatchSnapshot();
});
