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

   return ( <githubContext.Provider
                value={{
                    user: state.user,
                    users: state.users,
                    repos: state.repos,
                    loading: state.loading
                }}>
                    {props.children}
        </githubContext.Provider> 
   )
   
}

export default GitHubState