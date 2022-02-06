import React, { ChangeEvent, FC, useState } from "react";
import { Heading, Row } from ".";

interface IFormProps {
    name: string;
    email: string;
    message: string;
}

const Contact: FC<{}> = ({}) => {
    const [formState, setFormState] = useState<IFormProps>({
        name: "",
        email: "",
        message: "",
    });

    const inputClasses =
        "w-full bg-primary text-dark text-xl rounded-lg border-none px-5 py-3";

    return (
        <div className="relative py-8 lg:py-16">
            <div className="absolute inset-0 opacity-50 waves -z-1"></div>
            <Row>
                <Heading
                    title="Get In Touch"
                    headingSize="h2"
                    className="text-right"
                />
                <form id="contact" className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-wrap">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                id="name"
                                onChange={(e: ChangeEvent) =>
                                    setFormState({
                                        ...formState,
                                        name: (e.target as HTMLInputElement)
                                            .value,
                                    })
                                }
                                value={formState.name}
                                required
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                id="email"
                                onChange={(e: ChangeEvent) =>
                                    setFormState({
                                        ...formState,
                                        email: (e.target as HTMLInputElement)
                                            .value,
                                    })
                                }
                                value={formState.email}
                                required
                                className={inputClasses}
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-form">Message</label>
                            <textarea
                                id="contact-form"
                                name="contact-form"
                                onChange={(e: ChangeEvent) =>
                                    setFormState({
                                        ...formState,
                                        message: (e.target as HTMLInputElement)
                                            .value,
                                    })
                                }
                                value={formState.message}
                                placeholder="What's on your mind?"
                                required
                                className={inputClasses}
                            />
                        </div>
                    </div>
                    <input
                        type="submit"
                        name="submit"
                        id="sendBtn"
                        value="Send!"
                        className="self-end px-6 py-3 rounded-xl font-header bg-secondary text-neutral"
                        // onClick={this.handleSubmit}
                    />
                </form>
            </Row>
        </div>
    );
};

export default Contact;
export { Contact };
