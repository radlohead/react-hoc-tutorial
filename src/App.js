import React, { Component } from 'react';
import Post from './Post';
import Comment from './Comment';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Post />
				<Comment />
			</div>
		);
	}
}

export default App;
