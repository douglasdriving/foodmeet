import DinnerListItem from "./dinnerListItem/dinnerListItem";
import CreateMeetModal from "./createMeetModal/createMeetModal";
import { useState } from 'react';
import SetNameModal from "./setNameModal/setNameModal";
import existingMeets from "./existingMeets";
import FeedbackButton from "./feedbackButton/feedbackButton";

export default function Dinners() {

  const [meets, setMeets] = useState(existingMeets);
  const [username, setUsername] = useState('');

  function addMeet(newMeet) {
    newMeet.guests = [];
    newMeet.userCreated = true;
    newMeet.id = meets.length;
    const newMeetArr = [...meets, newMeet];
    newMeetArr.sort((a, b) => a.datetime - b.datetime);
    setMeets(newMeetArr);
  }

  function addGuest(meetId, guest) {
    //find the meet in the array with the meet id
    const meet = meets.find(meet => meet.id === meetId);
    //add the guest to the meet
    meet.guests.push(guest);
  }

  function removeGuest(meetId, guest) {
    //find the meet in the array with the meet id
    const meet = meets.find(meet => meet.id === meetId);
    //remove the guest from the meet
    meet.guests = meet.guests.filter(g => g !== guest);
  }

  return (
    <>
      {
        (username.length !== 0) &&
        <>
          <p style={{ textAlign: 'left' }}>Hello <b>{username}</b>!</p>
          <p style={{ textAlign: 'left' }}>
            These are the upcoming food meets in <b>Buenos Aires</b>
          </p>
          <div style={{
            overflowY: 'scroll', // Enable vertical scrolling
            marginBottom: '1rem',
          }}>
            {meets.map((meet, i) =>
              <DinnerListItem
                meet={meet}
                key={i}
                username={username}
                addGuest={addGuest}
                removeGuest={removeGuest}
              />
            )}
          </div>
          <CreateMeetModal addMeet={addMeet} username={username} />
          <div style={{ flex: 1 }} />
          <div style={{
            height: '1px',
            backgroundColor: 'white',
            marginBottom: '1rem',
          }}></div>
          <FeedbackButton />
        </>
      }
      <SetNameModal setName={setUsername} />
    </>
  );
}