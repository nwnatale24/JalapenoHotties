import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RestaurantSelect from './RestaurantSelect';
import RestaurantDropdown from './RestaurantDropdown';

function ShowModal(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const test = { ...inputs, rid: props.rest_id, user: props.user };

    const bodyFormData = new FormData();
    bodyFormData.append('review_title', test.title);
    bodyFormData.append('review_text', test.description);
    bodyFormData.append('review_total_score', test.score);
    bodyFormData.append('user_id', test.user);
    bodyFormData.append('restaurant_id', test.rid);

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };
    const url =
      'http://127.0.0.1:8000/api/reviews?review_title=' +
      test.title +
      '&review_text=' +
      test.description +
      '&review_total_score=' +
      test.score +
      '&user_id=' +
      test.user +
      '&restaurant_id=' +
      test.rid;
    axios
      .post(url, bodyFormData, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Review Title:
        <input
          type="text"
          name="title"
          value={inputs.title || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description
        <input
          type="text"
          name="description"
          value={inputs.description || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Score:
        <input
          type="number"
          name="score"
          value={inputs.score || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default ShowModal;
