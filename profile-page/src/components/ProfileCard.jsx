import React from 'react';

const ProfileCard = ({name, age, bio}) => {
  return (
    <div className='profile-card'>
        <span className='name-span'>{name}</span>
        <p>Age: {age}</p>
        <p>Bio: {bio}</p>
    </div>
  )
};

export default ProfileCard;
