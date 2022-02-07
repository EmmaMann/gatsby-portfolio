import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImageDataArgs } from "gatsby-source-sanity";
import React, { FC } from "react";
import { About, Card, HomeHeader, Contact, Row } from "../components";

interface IProject {
    id: string;
    title: string;
    excerpt: string;
    siteUrl: string;
    image: { asset: GatsbyImageDataArgs };
}

const HomePage: FC<{}> = ({}) => {
    const { allSanityProject: projects } = useStaticQuery(graphql`
        query GetAllProjects {
            allSanityProject(sort: { order: ASC, fields: _createdAt }) {
                nodes {
                    id
                    title
                    excerpt
                    siteUrl
                    image {
                        asset {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    return (
        <>
            <HomeHeader />
            <About />
            <Row
                className="grid gap-6 py-8 lg:gap-10 lg:grid-cols-2 lg:py-16 "
                rowId="projects"
            >
                {projects?.nodes?.map((project: IProject, i: number) => {
                    return (
                        <Card
                            key={project?.id}
                            title={project?.title}
                            description={project?.excerpt}
                            image={project?.image}
                            link={project?.siteUrl}
                            newTab={true}
                            delay={i % 2 === 1 ? "500" : "250"}
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
