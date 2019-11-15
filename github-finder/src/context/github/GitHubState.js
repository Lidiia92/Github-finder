import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';
import {SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS} from'../types';

const GitHubState = props => {
   const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
   } 

   const [state, dispatch] = useReducer(githubReducer, initialState);

   //SEARCH_USERS

   const searchUsers = async (text) => {
  
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
   }

   const setLoading = () => dispatch({type: SET_LOADING});

   return ( <githubContext.Provider
                value={{
                    user: state.user,
                    users: state.users,
                    repos: state.repos,
                    loading: state.loading,
                    searchUsers: searchUsers,
                }}>
                    {props.children}
        </githubContext.Provider> 
   )
   
}

export default GitHubState