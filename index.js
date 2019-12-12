import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogIndex = ({ data }) => {
    return (
        <Layout title={'thoughts on things'}>
            <SEO title="All posts" />

			<div className={ 'entry-content' }>
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
