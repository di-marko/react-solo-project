import React from 'react';
import ProfilePhoto from '../images/profile-photo.jpg';

export default function Header() {
  return <img className="profile-photo" src={ProfilePhoto} alt="Profile" />;
}
