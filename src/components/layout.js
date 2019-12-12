import React from 'react'

import { rhythm } from '../utils/typography'
import { Footer } from './footer'
import { Header } from './header'

class Layout extends React.Component {
	render() {
		const { title, children } = this.props

		return (
			<div
				style={{
					marginLeft: `auto`,
					marginRight: `auto`,
					maxWidth: '100%',
					padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
				}}
			>
				<Header title={title} />
				<main>{children}</main>
				<Footer />
			</div>
		)
	}
}

export default Layout
