import React, { FC } from "react";
import { Row } from ".";
import { Heading } from ".";

const About: FC<{}> = ({}) => {
    return (
        <div className="triangle-bg">
            <Row className="">
                <div className="spacer"></div>
                <div id="about">
                    <Heading title="About" headingSize="h2" />
                    <p className="pb-6 text-lg leading-loose">
                        An avid learner, Emma has completed a Bachelors of
                        Science, with Joint Honours Theatre &amp; Performance.
                        What better way to round out an education than switching
                        gears completely? Emma was drawn to this field by the
                        unique combination of analytical problem solving, and
                        creativity.
                    </p>
                    <p className="pb-6 text-lg leading-loose">
                        Emma strives to create highly funtional websites using
                        new technologies. Attention to details allows Emma to
                        fulfill client and design requirements to a T.
                    </p>
                </div>
            </Row>
        </div>
    );
};

export default About;
export { About };
