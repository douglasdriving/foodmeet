import DinnerListItem from "./dinnerListItem/dinnerListItem";
import CreateMeetModal from "./createMeetModal/createMeetModal";
import { useState } from 'react';
import SetNameModal from "./setNameModal/setNameModal";
import existingMeets from "./existingMeets";

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
        <div style={{
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          // border: '2px solid red',
        }}>
          <p>Hello <b>{username}</b>!</p>
          <p>These are the current food meets in <b>Buenos Aires</b></p>
          <div style={{
            overflowY: 'scroll', // Enable vertical scrolling
            flex: 1
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
          <CreateMeetModal addMeet={addMeet} />
        </div>
      }
      <SetNameModal setName={setUsername} />
    </>
  );
}