import React from 'react';
import mailIcon from '../images/envelope-solid.svg';

export default function Button() {
  return (
    <button className="btn">
      <img className="icon" src={mailIcon} alt="mail-icon" />
      Email
    </button>
  );
}
