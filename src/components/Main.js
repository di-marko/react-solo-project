import React from 'react';
import Button from './Button';

export default function Main() {
  return (
    <div className="mainContent-container">
      <div className="profile-name">
        <h1>Jonathan Spikes</h1>
        <h6>Frontend Developer</h6>
        <p>jonathanspikes.website</p>
      </div>
      <Button />
      <div className="description">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try
          to keep up with security and best practices, and am always looking for new things to learn.
        </p>
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture
          ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
