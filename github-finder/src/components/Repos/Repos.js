import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';


const Repos = (props) => {
    return props.repos.map(repo => <RepoItem key={repo.id} repo={repo} />)
}

Repos.prototypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos;
