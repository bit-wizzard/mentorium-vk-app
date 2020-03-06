import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import './App.css'
import { render } from 'react-dom'

class App extends Component {

	
	render() {
		const { children, location } =this.props
		return (
			<>
				{children}
			</>
	)
}
}

export default withRouter(App);