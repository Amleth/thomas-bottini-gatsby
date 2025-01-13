import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
  allFile(filter: {fields: {parsedContent: {tags: {in: [$tag]}}}}) {
    edges {
      node {
        id
        fields {
          slug
          parsedContent {
            title
            tags
          }
        }
      }
    }
  }
}
`

export default function C({ pageContext, data }) {
  const { tag } = pageContext
  
  return (
    <Layout pageTitle={"tagged with " + tag}>
      <table className="tagtable border-collapse">
        <thead>
          <tr className="border border-stone-300 text-stone-500">
            <th>title</th>
            <th>link</th>
            <th>tagged with</th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges
            .filter(node => !node.node.fields.slug.startsWith('_'))
            .map(node => (
              <tr key={node.node.id} className="border border-stone-300">
                <td>
                  {node.node.fields.parsedContent.title}
                </td>
                <td>
                  <Link to={"/" + node.node.fields.slug} style={{ whiteSpace: 'nowrap' }}>
                    /{node.node.fields.slug}
                  </Link>
                </td>
                <td>
                  {node.node.fields.parsedContent.tags.sort().join(", ")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </ Layout>
  )
}