import React, { Component } from 'react'

//mobx
import { observer } from 'mobx-react'
import { withRouter, Switch, Route, } from 'react-router-dom'
import './App.css'
import Main from './components/Main/Main'
import CoursePage from './components/CoursePage/CoursePage';
import Test from './components/Test/Test'
import Submit from './components/Submit/Submit'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			prevDepth: this.getPathDepth(this.props.location)
		}
	}

	componentWillReceiveProps() {
		this.setState({ prevDepth: this.getPathDepth(this.props.location) })
	}

	getPathDepth(location) {
		let pathArr = location.pathname.split("/")
		pathArr = pathArr.filter(n => n !== "")
		return pathArr.length;
	}


	render() {

		const { location } = this.props
		const currentKey = location.pathname.split('/')[1] || "/"

		return (
			<>
				{/* <TransitionGroup> */}
					{/* <CSSTransition key={currentKey} timeout={2500} classNames='pageSlider' mountOnEnter={false} unmountOnExit={true}> */}
						{/* <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? "left" : "right"}> */}
							<Switch location={location}>
								<Route
									exact
									path="/"
									component={Main}
								/>
								<Route
									path="/course/:id"
									component={CoursePage}
								/>
								<Route
									path="/test/:test_id"
									component={Test}
								/>
								<Route
									path="/submit/:test_id"
									component={Submit}
								/>
							</Switch>
						{/* </div>
					</CSSTransition>
				</TransitionGroup> */}
			</>
		)
	}
}

export default withRouter(observer(App));