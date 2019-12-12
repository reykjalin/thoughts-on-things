import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          social {
            twitter
            github
			keybase
			email
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
