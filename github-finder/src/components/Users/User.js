import React, { Component } from 'react'

export class User extends Component {

    componentDidMount() {
        this.props.getUser(this.props.match.params.username)
    }

    render() {

        const 
            {name, 
            avatar_url, 
            location, 
            bio, blog, 
            login, 
            html_url, 
            following, 
            followers, 
            public_repos, 
            public_gists, 
            hireable} = this.props.user
        return (
            <div>
                {login}

            </div>
        )
    }
}

export default User
