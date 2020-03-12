import React, { Component } from 'react'

//mobx
import { observer } from 'mobx-react'
import LessonModel from './models/lesson'
import { withRouter } from 'react-router-dom'
import './App.css'

class App extends Component {

	
	render() {
		const { children} = this.props
		return (
			<>
				{children}
			</>
	)
}
}

export default withRouter(observer(App));