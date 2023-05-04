import React from 'react';
import axios from 'axios';
import UserReview from '../components/UserReview';
import '../App.css';
import Logo from '../Logo.png'

//TESTING FOR BIO FELIPE & NIK
export default class AccountInfo extends React.Component {
  state = {
    id: 'N/a',
    name: 'N/a',
    email: 'N/a',
    user_reviews: [],
  };

  async componentDidMount() {

    const queryParams = new URLSearchParams(window.location.search)
    const user_id = queryParams.get("id");

    const answer = await axios.get(`http://127.0.0.1:8000/api/users/id/${user_id}`);
    const answer2 = await axios.get(`http://127.0.0.1:8000/api/reviews/user_id/${user_id}`);
    const response2 = await answer2.data.reviews;
    const answer3 = await axios.get('http://127.0.0.1:8000/api/restaurants');
    const response3 = await answer3.data.restaurants;

    console.log(answer.data);
    console.log(answer2.data);

    const fullName = `${answer.data.users[0].first_name} ${answer.data.users[0].last_name}`;

    let review_arr = response2.map(obj => Object.values(obj));
    let restaurant_arr = response3.map(obj => Object.values(obj));

    for (let i = 0; i < review_arr.length; i++) {
      for (let k = 0; k < restaurant_arr.length; k++) {
        if (review_arr[i][6] == restaurant_arr[k][0]) {
          review_arr[i].push(restaurant_arr[k][2]);
        }
      }
    }

    this.setState({
      id: answer.data.users[0].id,
      name: fullName,
      email: answer.data.users[0].email_address,
      user_reviews: review_arr,
    });

    console.log(this.state.user_reviews);
  }

  render() {
    return (
      <div className='account-page'>
        <img src={Logo} className= "Logo3" alt='Logo'/>
        <div className="account-page-info">
          <h3>Account Info: </h3>
          <p>Name: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
        </div>
        <div className="account-page-review">
            <UserReview reviews={this.state.user_reviews} />
        </div>
        </div>
    );
  }
}