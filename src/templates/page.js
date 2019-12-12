import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data }) => {
	const postData = data.wordpressPage

    return (
        <Layout title={ 'thoughts on things' }>
            <SEO title={ postData.title } description={ postData.excerpt } />

			{ 'home' !== postData.title ? <h1 style={{ textAlign: 'center' }}>{postData.title}</h1> : undefined }
            <div className={ 'entry-content' } dangerouslySetInnerHTML={{ __html: postData.content }} />
        </Layout>
    )
}

export default PageTemplate

export const query = graphql`
    query($id: Int!) {
        wordpressPage(wordpress_id: { eq: $id }) {
            title
            excerpt
            content
        }
    }
`
