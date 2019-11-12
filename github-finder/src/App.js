import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import Alert from './components/Alert';
import Users from './components/Users/Users';
import User from './components/Users/User';
import Search from './components/Users/Search';
import About from './components/pages/About';
import './App.css';

class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
    repos: []
  }

  // async componentDidMount() {
  //   this.setState({loading: true});
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({users: res.data, loading: false});
  // }

  searchUsers = async (text) => {
  
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading: false});
  }

  clearUsers = () => {
    this.setState({users: [], loading: false});
  }

  setAlert = (message, type) => {
    this.setState({ alert: {
      message,
      type
    }})

    setTimeout(() => {this.setState({alert: null})}, 3000)
  }

  //Get Single User

  getUser = async (username) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user: res.data, loading: false});
  }

  //Get User Repos

  getUserRepos = async (username) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({repos: res.data, loading: false});
  }

  render() {
      return (
        <Router>
          <div className="App">
              <NavBar />
              <div className="container">
                <Alert alert={this.state.alert}/>

                <Switch>
                  <Route exact path="/" render={props => (
                    <Fragment>
                      <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true : false} setAlert={this.setAlert}/>
                      <Users loading={this.state.loading} users={this.state.users}/>
                    </Fragment>
                  )} />

                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:username" render={props => (
                    <User {...props} getUser={this.getUser} user={this.state.user} loading={this.state.loading} getUserRepos={this.getUserRepos} repos={this.state.repos}/>
                  )}/>
                </Switch>

              </div>
          </div>
        </Router>
      );
  }
}

export default App;
