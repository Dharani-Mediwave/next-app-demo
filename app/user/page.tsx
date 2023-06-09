"use client"
import React, { useEffect, useReducer } from 'react'
import { getAllUsers } from '../service/ApiService';
import { userReducer } from '../reducer/UserReducer';
import { actionType } from '../action/userAction';
import { UserItem } from '../components/UserItem';
import '../styles/user.css';

const initialState = {
  isUserLoader: false,
  userList: [],
  error: ''
};

function User() {
  const [userState, dispatch] = useReducer(userReducer, initialState)

  const fetchAllUser = async () => {
    try {
      const userResponse = await getAllUsers();
      dispatch({ type: actionType.USER_RESPONSE_SUCCESS, data: userResponse });
      return userResponse;
    } catch (error) {
      dispatch({ type: actionType.USER_RESPONSE_FAILURE, data: error });
    }
  }

  useEffect(() => {
    dispatch({ type: actionType.USER_REQUEST, payload: true });
    fetchAllUser();
  }, [])

  return (
    <div className='p-8'>
      <h1 className='mb-5'>User page</h1>
      {userState.isUserLoader ?
        <div>
          <span>Loading</span>
        </div> :
        userState.userList && userState.userList.length ?
          <div className='user-item-blk'>
            {userState.userList.map((userItem: any, idx: number) => {
              return (
                <UserItem
                  key={`user-item-${idx}`}
                  data={userItem}
                  id={idx} />
              )
            })}
          </div> :
          <div>
            <span>No data found</span>
          </div>}
    </div>
  )
}

export default User