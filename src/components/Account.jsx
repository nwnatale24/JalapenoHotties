import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserReview from '../components/UserReview';

export default function AccountInfo() {
  const [id, setId] = useState('N/a');
  const [name, setName] = useState('N/a');
  const [email, setEmail] = useState('N/a');
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const queryParams = new URLSearchParams(window.location.search);
      const userId = queryParams.get('id');

      const userResponse = await axios.get(`http://127.0.0.1:8000/api/users/id/${userId}`);
      const reviewResponse = await axios.get(`http://127.0.0.1:8000/api/reviews/user_id/${userId}`);
      const restaurantResponse = await axios.get('http://127.0.0.1:8000/api/restaurants');

      const fullName = `${userResponse.data.users[0].first_name} ${userResponse.data.users[0].last_name}`;

      let reviewArr = reviewResponse.data.reviews.map(obj => Object.values(obj));
      let restaurantArr = restaurantResponse.data.restaurants.map(obj => Object.values(obj));

      for (let i = 0; i < reviewArr.length; i++) {
        for (let k = 0; k < restaurantArr.length; k++) {
          if (reviewArr[i][6] == restaurantArr[k][0]) {
            reviewArr[i].push(restaurantArr[k][2]);
          }
        }
      }

      setId(userResponse.data.users[0].id);
      setName(fullName);
      setEmail(userResponse.data.users[0].email_address);
      setUserReviews(reviewArr);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="account-page-info">
        <h3>Account Info:</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <div className="Popup">
          <UserReview reviews={userReviews} />
        </div>
      </div>
    </div>
  );
}
