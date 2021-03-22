import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../Redux/Actions/userAction';
import Sidebar from '../Layout/Sidebar';

const Account = () => {
    const userData = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const { user } = userData;

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    return(
      <div>
          <Sidebar />
          <p>{user.first_name}{' '}{user.last_name}</p>
          {user.description}
      </div>
    );
}

export default Account;
