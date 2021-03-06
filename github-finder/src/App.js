import React, {useState, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import Alert from './components/Alert';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Search from './components/Users/Search';
import About from './components/pages/About';
import GitHubState from './context/github/GitHubState';
import './App.css';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);


  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const setAlertMessage = (message, type) => {
    setAlert({
      message,
      type
    })

    setTimeout(() => {setAlert(null)}, 3000)
  }

  //Get Single User

  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
  }

  //Get User Repos

  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
  }

  return (
    <GitHubState>
      <Router>
        <div className="App">
            <NavBar />
            <div className="container">
              <Alert alert={alert}/>

              <Switch>
                <Route exact path="/" render={props => (
                  <Fragment>
                    <Search  clearUsers={clearUsers} showClear={users.length > 0 ? true : false} setAlert={setAlertMessage}/>
                    <Users loading={loading} users={users}/>
                  </Fragment>
                )} />

                <Route exact path="/about" component={About} />
                <Route exact path="/user/:username" render={props => (
                  <User {...props} getUser={getUser} user={user} loading={loading} getUserRepos={getUserRepos} repos={repos}/>
                )}/>
              </Switch>

            </div>
        </div>
      </Router>
    </GitHubState>
  );
}

export default App;
