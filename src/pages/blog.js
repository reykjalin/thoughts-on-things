import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogIndex = ({ data }) => {
    return (
        <Layout title={'thoughts on things'}>
            <SEO title="blog" />

			<div className={ 'entry-content' }>
				<ul style={{ listStyle: 'none' }}>
					{data.allWordpressPost.edges.map(post => (
						<li style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }} key={ post.node.slug }>
							<p>{ post.node.date }</p>
							<Link to={`/post/${post.node.slug}`}>
								<p
									dangerouslySetInnerHTML={{
										__html: post.node.title,
									}}
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>
        </Layout>
    )
}

export default BlogIndex

export const pageQuery = graphql`
    query {
        allWordpressPost {
            edges {
                node {
                    title
                    excerpt
                    slug
                    author {
                        name
                    }
                    date(formatString: "YYYY-MM-DD")
                }
            }
        }
    }
`
