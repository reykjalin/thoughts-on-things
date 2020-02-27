const React = require('react');

exports.onRenderBody = (
	{ setPostBodyComponents },
	pluginOptions
) => {
	setPostBodyComponents(
		[
			<script data-goatcounter="https://tot.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
		]
	)
}
