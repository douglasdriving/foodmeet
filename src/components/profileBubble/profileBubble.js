import { useState } from 'react';

export default function ProfileBubble({ user }) {

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  // const togglePhoneNumber = () => {
  //   setShowPhoneNumber(!showPhoneNumber);
  // };

  return (
    <div className="profile-container">

      <img className="profile-image" src={user.profilePicture} alt="profile" />
      
      <div className='profile-text'>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-introduction">{user.introduction}</p>
        {showPhoneNumber &&
          <p className="profile-phone-number">📞: {user.phoneNumber}</p>
        }
      </div>

    </div>
  );
}
