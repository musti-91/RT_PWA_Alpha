import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import moment from 'moment'
export interface InjectedProps {
	loading?: boolean
	darkTheme?: string
	onClick?: () => void
}

interface InjectedState {
	loading: boolean
	darkTheme?: boolean
}

//TODO: change color of icon every loading
const LoaderHoc = <P extends InjectedProps>( WrappedComponent: React.ComponentType<P> ) => {
	return class LoaderHoc extends Component<P & InjectedProps, InjectedState> {
		state: InjectedState = {
			loading: true,
			darkTheme: false
		}

		componentDidMount() {
			let getTimeOfNow = moment().format( 'LT' ) // 2.30 PM
			if ( getTimeOfNow.indexOf( 'PM' ) !== -1 ) {
				this.setState( { darkTheme: true } )
			}

			setTimeout( () => {
				this.setState( { loading: false } )
			}, 1000 )

		}

		ToggleTheme = () => {
			this.setState( { darkTheme: !this.state.darkTheme } )
		}

		render() {
			const { loading, darkTheme } = this.state
			return loading ? (
				<div className="loader">
					<Icon name="spinner" loading className="loader-icon" />
				</div>
			) : (
					<WrappedComponent {...this.props} darkTheme={darkTheme} onClick={this.ToggleTheme} />
				)
		}
	}
}

export default LoaderHoc
