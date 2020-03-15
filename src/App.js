import React, { Component } from 'react'

//mobx
import { observer } from 'mobx-react'
import { withRouter, Switch, Route, } from 'react-router-dom'
import './App.css'

class App extends Component {
	render() {
		return (
			<>
				{this.props.children}
			</>
		)
	}
}

export default withRouter(observer(App));