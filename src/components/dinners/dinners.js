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
    const newMeetArr = [...meets, newMeet];
    newMeetArr.sort((a, b) => a.datetime - b.datetime);
    setMeets(newMeetArr);
  }

  return (
    <>
      {
        (username.length != 0) &&
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