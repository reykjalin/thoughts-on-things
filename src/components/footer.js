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
						<br />
						This website collects analytics via <a href="https://goatcounter.com">Goatcounter</a>.
						Analytics don't use cookies, and don't collect <a href="https://en.wikipedia.org/wiki/Personal_data">PII</a>.
				</small>
			</p>
		</footer>
    )
}
