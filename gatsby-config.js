require( 'dotenv' ).config( {
	path: `.env.${ process.env.NODE_ENV }`,
} );

module.exports = {
	siteMetadata: {
		title: `thoughts on things`,
		author: `Kristófer Reykjalín Þorláksson`,
		description: `A collection of thoughts on various things.`,
		siteUrl: `https://thorlaksson.com/`,
		social: {
			twitter: `kreykjalin`,
			github: `reykjalin`,
			keybase: `reykjalin`,
			email: `kristofer@thorlaksson.com`
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					{
						resolve: `gatsby-source-wordpress`,
						options: {
							baseUrl: `thoughts.thorlaksson.com`,
							protocol: `https`,
							hostingWPCOM: true,
							auth: {
								wpcom_app_clientSecret: process.env.WP_CLIENT_SECRET,
								wpcom_app_clientId: process.env.WP_CLIENT_ID,
								wpcom_user: process.env.WP_USER,
								wpcom_pass: process.env.WP_PASS,
							},
							useACF: false,
							verboseOutput: false,
							perPage: 100,
							searchAndReplaceContentUrls: {
								sourceUrl: `https://kreykjalin.wpcomstaging.com`,
								replacementUrl: `https://thorlaksson.com`,
							},
							concurrentRequests: 10,
							includedRoutes: [
								`**/categories`,
								`**/posts`,
								`**/pages`,
								`**/media`,
								`**/tags`,
								`**/taxonomies`,
								`**/users`,
							],
						},
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
					{
						site {
							siteMetadata {
								title
								description
								siteUrl
								site_url: siteUrl
							}
						}
					}
				`,
				feeds: [
					{
						serialize: ( { query: { site, allWordpressPost } } ) => {
							return allWordpressPost.edges.map( edge => {
								return Object.assign( {}, { title: edge.node.title, date: edge.node.date }, {
									description: edge.node.excerpt,
									date: edge.node.date,
									url: site.siteMetadata.siteUrl + '/post/' + edge.node.slug,
									guid: site.siteMetadata.siteUrl + '/post/' + edge.node.slug,
									custom_elements: [ { 'content:encoded': edge.node.content } ],
								} )
							} );
						},
						query: `
							{
								allWordpressPost {
									edges {
										node {
											excerpt
											content
											slug
											title
											date
										}
									}
								}
							}
						`,
						output: '/rss.xml',
						title: 'thoughts on things rss feed',
					}
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `thoughts on things`,
				short_name: `thoughts on things`,
				start_url: `/`,
				background_color: `#2f3640`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/gatsby-icon.png`,
				include_favicon: false,
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
	],
}
