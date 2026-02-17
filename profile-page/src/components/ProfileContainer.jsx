import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileContainer = () => {
    const bio1 = "I love camping! Hit me up if you wanna go kayaking :)";
    const bio2 = "Grad student in linguistics. I like to find new books to read and chat about them.";
    const bio3 = "Vet tech. Aside from animals, I love video and board games!"

    return (
        <div className='profile-cont'>
            <ProfileCard name="Jordan" age={66} bio={bio1} /> 
            <ProfileCard name="Kristin" age={23} bio={bio2} /> 
            <ProfileCard name="Tobi" age={30} bio={bio2} /> 
        </div>
    )
};

export default ProfileContainer;
