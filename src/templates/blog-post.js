import React from 'react'
import { graphql } from 'gatsby'
import readingTime from 'reading-time'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './blog-post.css';

const BlogPostTemplate = ({ data }) => {
    const postData = data.wordpressPost
    //const featuredImg = postData.featured_media ? postData.featured_media.localFile.childImageSharp.fixed : undefined;
    const stats = readingTime( postData.content );

    return (
        <Layout title={'thoughts on things'}>
            <SEO title={postData.title} description={postData.excerpt} />
			<div className={ 'post-header' } >
				<h1 dangerouslySetInnerHTML={{ __html: postData.title }} />
				<div className={ 'post-meta' }>
        				<p>&#9719; { stats.text }</p>
        				<p>{ postData.date }</p>
				</div>
			</div>
            <div className={ 'entry-content' } dangerouslySetInnerHTML={{ __html: postData.content }} />
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query($id: Int!) {
        wordpressPost(wordpress_id: { eq: $id }) {
            title
            content
            excerpt
            date(formatString: "YYYY-MM-DD")
            author {
                name
            }
            jetpack_featured_media_url
        }
    }
`
