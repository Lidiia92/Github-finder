import React, { useEffect, Fragment } from 'react';
import Spinner from '../Spinner';
import Repos from '../Repos/Repos';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const User = (props) => {

    useEffect(() => {
        props.getUser(props.match.params.username)
        props.getUserRepos(props.match.params.username)
    }, []);


    const 
        {name, 
        avatar_url, 
        location, 
        company,
        bio, 
        blog, 
        login, 
        html_url, 
        following, 
        followers, 
        public_repos, 
        public_gists, 
        hireable} = props.user

    if (props.loading) {
        return <Spinner />
    } else {
        return (
            <div>
                <Link to="/" className="btn btn-light">Back to Search</Link>
                Hireable: {' '}
                {hireable ? <i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger" />}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url}  className="round-img" alt="User avatar" style={{width: '150px'}}/>
                        <div>{name ? <h1>{name}</h1> : <h5>Name was not provided</h5>}</div>
                        <div>{location ? <p>Location: {location}</p> : <p>Location was not provided</p>}</div>
                        <div>{
                            bio && 
                            (<Fragment>
                                <h3>Bio: {bio}</h3>
                            </Fragment>
                            )}
                            <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                            <ul>
                                <li>
                                    {login && <Fragment>
                                        <strong>Username: {login}</strong>
                                    </Fragment>}
                                </li>

                                <li>
                                    {company && <Fragment>
                                        <strong>Company: {company}</strong>
                                    </Fragment>}
                                </li>

                                <li>
                                    {blog && <Fragment>
                                        <strong>Website: {blog}</strong>
                                    </Fragment>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card text-center">
                        <div className="badge badge-primary">Followers: {followers}</div> 
                        <div className="badge badge-success">Following: {following}</div>
                        <div className="badge badge-light">Public Repos: {public_repos}</div>
                        <div className="badge badge-danger">Public Gists: {public_gists}</div>
                </div>

                <Repos repos={props.repos}/>
            </div>
        )
    }
}

User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired
}

export default User
