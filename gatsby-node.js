async function fetchBeersAndTurnIntoNodes({
    actions,
    createNodeId,
    createContentDigest,
}) {
    const { data } = await graphql(`
        query {
            projects: allSanitySampleProject {
                edges {
                    node {
                        id
                        title
                        excerpt {
                            children {
                                text
                            }
                        }
                        mainImage {
                            alt
                            asset {
                                title
                                path
                            }
                        }
                    }
                }
            }
        }
    `);
    console.log(data);

    data.edges.node.map((project) => {
        const nodeMeta = {
            id: createNodeId(`beer-${project.title}`),
            parent: null,
            children: [],
            internal: {
                type: "Beer",
                mediaType: "application/json", // allows other plugins to find media type they are looking for
                contentDigest: createContentDigest(project),
            },
        };
        actions.createNode({
            ...project,
            ...nodeMeta,
        });
    });
}

export async function sourceNodes(params) {
    await Promise.all([fetchBeersAndTurnIntoNodes(params)]);
}
