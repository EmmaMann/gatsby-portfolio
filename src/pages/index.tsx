import { graphql, useStaticQuery } from "gatsby";
import React, { FC } from "react";
import { About, Card, HomeHeader, Contact, Row } from "../components";
// import { projects } from "../staticData";

const HomePage: FC<{}> = ({}) => {
    const { allSanitySampleProject: projects } = useStaticQuery(graphql`
        query {
            allSanitySampleProject(sort: { order: ASC, fields: _createdAt }) {
                edges {
                    node {
                        id
                        title
                        slug {
                            current
                        }
                        excerpt {
                            children {
                                text
                            }
                        }
                        mainImage {
                            alt
                            asset {
                                title
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    console.log(projects);
    return (
        <>
            <HomeHeader />
            <About />
            <Row
                className="grid gap-6 py-8 lg:gap-10 lg:grid-cols-2 lg:py-16 "
                rowId="projects"
            >
                {projects?.edges?.map(({ node }) => {
                    console.log(node?.mainImage.asset);
                    return (
                        <Card
                            key={node?.id}
                            title={node?.title}
                            description={
                                node?.excerpt?.[0]?.children?.[0]?.text
                            }
                            image={{
                                src: node?.mainImage?.asset?.url,
                                alt: node?.mainImage?.asset?.alt,
                            }}
                            link={node?.slug?.current}
                            newTab={true}
                        />
                    );
                })}
            </Row>
            <Contact />
        </>
    );
};

export default HomePage;
export { HomePage };
