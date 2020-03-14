const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    const blogPage = path.resolve(`./src/templates/page.js`)
    const result = await graphql(
        `
            {
                allWordpressPost {
                    edges {
                        node {
                            slug
                            wordpress_id
                        }
                    }
                }
                allWordpressPage {
                    edges {
                        node {
                            slug
                            wordpress_id
                        }
                    }
                }
            }
        `
    )

    if (result.errors) {
        throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allWordpressPost.edges

    posts.forEach(post => {
        createPage({
            path: `/post/${post.node.slug}`,
            component: blogPost,
            context: {
                id: post.node.wordpress_id,
            },
        })
    })

	// Create site pages.
    const pages = result.data.allWordpressPage.edges
	pages.filter( page => {
		return 'about' === page.node.slug || 'home' === page.node.slug || 'links-of-interest' === page.node.slug;
	} )
		.forEach(page => {
			createPage({
				path: 'home' === page.node.slug ? '/' : `/${page.node.slug}`,
				component: blogPage,
				context: {
					id: page.node.wordpress_id,
				},
			})
		});
}
