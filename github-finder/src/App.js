import React, {Component} from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar'
import Users from './components/Users/Users';
import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true});
    const res = await axios.get('https://github.com/defunkt/users');
    this.setState({users: res.data, loading: false});
  }

  render() {
      return (
        <div className="App">
            <NavBar />
            <div className="container">
              <Users />
            </div>
        </div>
      );
  }
}

export default App;
