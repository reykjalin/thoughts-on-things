import React from 'react'
import { graphql } from 'gatsby'
import readingTime from 'reading-time'

import parse, { domToReact } from 'html-react-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Layout from '../components/layout'
import SEO from '../components/seo'
import './blog-post.css';

const PostCode = ( { language, children } ) => (
	<SyntaxHighlighter
		language={ language }
		style={ xcode }>
		{ children }
	</SyntaxHighlighter>
);

const getLanguage = node => {
	// language custom class is the last class.
	return node.attribs.class.split( ' ' ).pop();
}

const getCode = node => {
	if ( node.children.length > 0 && 'code' === node.children[0].name) {
		return node.children[0].children;
	}
	return node.children;
}

const replaceCode = node => {
	if ( 'pre' !== node.name || node.children.length <= 0 ) {
		return;
	}
	return (
		<PostCode language={ getLanguage( node ) }>
			{ domToReact( getCode( node ) ) }
		</PostCode>
	);
}

const BlogPostTemplate = ({ data }) => {
	const postData = data.wordpressPost;
	//const featuredImg = postData.featured_media ? postData.featured_media.localFile.childImageSharp.fixed : undefined;
	const stats = readingTime( postData.content );

	return (
		<Layout title={'thoughts on things'}>
			<SEO title={postData.title} description={postData.excerpt} />
			<div className={ 'post-header' } >
				<h1 dangerouslySetInnerHTML={{ __html: postData.title }} />
				<div style={{ color: '#9fa7ac' }} dangerouslySetInnerHTML={{ __html: postData.excerpt }} />
				<div className={ 'post-meta' }>
						<p>&#9719; { stats.text }</p>
						<p>{ postData.date }</p>
				</div>
			</div>
			<div className={ 'entry-content' }>
				{ parse( postData.content, { replace: replaceCode } ) }
			</div>
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
