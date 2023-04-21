import AccountInfo from '../components/Account'

export function Account() {

  /* get the user_id of the current logged in user from the 
     query parameter. 
  */

    const queryParams = new URLSearchParams(window.location.search)
    const user_id = queryParams.get("id");
    console.log(user_id);

    return (
        <div>
            <div className="header-container">
                <div className="Title">Account</div>
            </div>
            <div className="body-container">
                <AccountInfo user={user_id} />
            </div>
        </div>
    )
}