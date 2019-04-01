import React from 'react';

const withRequest = (url) => (WrappedComponent) => {
	return class extends React.Component {
		state = {
			data: null
		}

		async initialize() {
			try {
				const response = await fetch(url);
				const responseData = await response.json();
				this.setState({
					data: responseData
				});
			} catch (e) {
				console.log(e);
			}
		}

		componentDidMount() {
			this.initialize();
		}

		render() {
			return (
				<WrappedComponent {...this.state} />
			)
		}
	}
}

export default withRequest;