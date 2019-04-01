import React, { Component } from 'react';
import withRequest from './withRequest';

class Post extends Component {
    render() {
        const { data } = this.props;
        if (!data) return null;

        return (
            <div>
                {JSON.stringify(data)}
            </div>
        );
    }
}

const withRequestData = 'https://jsonplaceholder.typicode.com/posts/1';
export default withRequest(withRequestData)(Post);