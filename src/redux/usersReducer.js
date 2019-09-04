import {followAPI, usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROCESS = "TOGGLE-FOLLOWING-IN-PROCESS";


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProcess: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users
                    .map(u => {
                            return u.id === action.userId ? {...u, followed: true} : u;
                        }
                    )
            };
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users
                    .map(u => {
                            return u.id === action.userId ? {...u, followed: false} : u;
                        }
                    )
            };
        }
        case SET_USERS: {
            return {...state, users: [...action.users]};
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetchingData}
        }
        case TOGGLE_FOLLOWING_IN_PROCESS: {
            return {...state,
                followingInProcess: action.isFetching
                    ? [...state.followingInProcess, action.userId]
                    : state.followingInProcess.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount =(totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetchingData) => ({type: TOGGLE_IS_FETCHING, isFetchingData});
export const toggleFollowingInProcess = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROCESS, isFetching, userId});

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
         dispatch(toggleIsFetching(true));
        usersAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    };
};

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProcess(true, userId));
        followAPI.postUserFollowing(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId));
                }
                dispatch(toggleFollowingInProcess(false, userId));
            });
    }
};

export const unfollowUser = (userId) => {
  return (dispatch) => {
      dispatch(toggleFollowingInProcess(true, userId));
      followAPI.deleteUserFollowing(userId)
          .then(data => {
              if (data.resultCode === 0) {
                  dispatch(unfollow(userId));
              }
              dispatch(toggleFollowingInProcess(false, userId));
          });
  }
};

export default usersReducer;
