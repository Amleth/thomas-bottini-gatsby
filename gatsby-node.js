const fs = require('fs')
const jsYaml = require(`js-yaml`)
const path = require('path')

const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

async function onCreateNode({ node, actions, createContentDigest, createNodeId, loadNodeContent, getNode }) {
    const { createNode, createNodeField, createParentChildLink } = actions

    if (node.internal.mediaType === 'text/yaml' && node.sourceInstanceName === 'kb') {
        const content = await loadNodeContent(node)
        const parsedContent = jsYaml.load(content)

        createNodeField({
            node,
            name: `json`,
            value: JSON.stringify({ t: parsedContent.title, i: parsedContent.i, s: parsedContent.s }),
        })
        createNodeField({
            node,
            name: `parsedContent`,
            value: parsedContent
        })
        createNodeField({
            node,
            name: `published`,
            value: !node.base.startsWith("_"),
        })
        createNodeField({
            node,
            name: `slug`,
            value: node.name,
        })
    }
}

exports.onCreateNode = onCreateNode

exports.createPages = ({ graphql, actions }) => {
    const tagSet = new Set()
    const { createPage } = actions
    return graphql(`
        query {
            allFile {
                nodes {
                    fields {
                        slug
                        parsedContent {
                            tags
                        }
                    }
                }
            }
        }
  `).then(result => {
        result.data.allFile.nodes.forEach(node => {
            node.fields.parsedContent.tags.forEach(tag => {
                if (!node.fields.slug.startsWith("_")) {
                    tagSet.add(tag)
                }
            })
        })
        tagSet.forEach(tag => {
            createPage({
                path: `/tag/` + tag,
                component: path.resolve("src/pages/tag.jsx"),
                context: { tag },
            })
        })
    })
}