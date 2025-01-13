import { useStaticQuery, graphql } from "gatsby"

const useTags = () => {
    const { allFile } = useStaticQuery(
        graphql`
            query Tags {
                allFile(filter: {fields: {published: {eq: true}}}) {
                    group(field: {fields: {parsedContent: {tags: SELECT}}}) {
                        fieldValue
                        totalCount
                    }
                    nodes {
                        fields {
                            slug
                        }
                    }
                }
            }
            `
    )
    return allFile.group
}

export default useTags