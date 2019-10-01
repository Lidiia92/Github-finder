import React, { Component } from 'react'

class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: 1,
            login: "mojombo",
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
            html_url: "https://github.com/mojombo"

        }
    }

    render() {
        return (
            <div className="card text-center">
                <img src={this.state.avatar_url} alt="Avatar" className="round-img" style={{width: '60px'}}/>
            </div>
        )
    }
}

export default UserItem
