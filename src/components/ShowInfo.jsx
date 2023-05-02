import React from 'react';
import axios from 'axios';
import Modal from './Modal';

export default function ShowInfo({ rest_id, user }) {
  return (
    <div>
      <Modal rest_id={rest_id} user={user} />
    </div>
  );
}
