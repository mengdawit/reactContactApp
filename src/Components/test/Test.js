import React, { Component } from 'react';

class Test extends Component {
	state = {
		title: '',
		body: ''
	};
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => response.json()).then((data) =>
			this.setState({
				title: data.title,
				body: data.body
			})
		);
	}

	// componentWillMount() {
	// 	console.log('componentWillMount...');
	// }

	// componentdidUpdate() {
	// 	console.log('componentDidUpdate...');
	// }

	// componentWillUpdate() {
	// 	console.log('componentWillUpdate...');
	// }

	// componentWillReceiveProps(nextProps, nextState) {
	// 	console.log('componentWillReceiveProps...');
	// }

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	return null;
	// }

	// getSnapshoptBeforeUndate(nextProps, prevState) {
	// 	console.log('getSnapshoptBeforeUndate');
	// }

	render() {
		const { title, body } = this.state;
		return (
			<div>
				<h1>{title}</h1>
				<p>{body}</p>
			</div>
		);
	}
}

export default Test;
