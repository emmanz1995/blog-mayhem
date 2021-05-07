import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../Redux/Actions/userAction';
import Sidebar from '../layouts/Sidebar';
import DashboardNav from '../layouts/DashboardNav';
import '../scss/account.scss';

const Account = () => {
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const { user } = userData;

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    return(
      <div className="account-wrapper">
          <DashboardNav user={user} />
          <Sidebar />
          <div className="user-details">
              <h1>Account Details</h1>
              <hr />
              <p>Full Name: {user.first_name}{' '}{user.last_name}</p><br />
              <p>Role: {user.roles}</p><br />
              <p>Email: {user.email}</p><br />
              <p>Username: {user.name}</p><br />
              <p>Description: </p>
              <p>{user.description || <p>No description</p>}</p>
          </div>
      </div>
    );
}

export default Account;
