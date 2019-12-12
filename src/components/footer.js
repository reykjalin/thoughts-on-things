import React from 'react'

import './footer.css';
import { Link } from 'gatsby';

export const Footer = () => {
    return (
		<footer className={ 'site-footer' }>
			<hr className="no-slash" />
			<small>
				<p>
					Made with ♥ for the web | <a href="/rss.xml">rss</a>
					<br />
					This website does not track you or collect analytics.
				</p>
				<p>
					© 2019 thoughts on things
				</p>
			</small>
		</footer>
    )
}
