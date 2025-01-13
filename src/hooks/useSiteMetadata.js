import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          tba
          tbu
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata