import React from 'react'

import './footer.css';

export const Footer = () => {
    return (
		<footer className={ 'site-footer' }>
			<hr className="no-slash" />
			<p>
				<small>
						Made with ♥ for the web | <a href="/rss.xml">rss</a>
						<br />
						This website does not track you or collect analytics.
				</small>
			</p>
			<p>
				<small>
						© { new Date().getFullYear() } thoughts on things
				</small>
			</p>
		</footer>
    )
}
