import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

import { Button, Heading, Modal, Row } from ".";
import { useRef } from "react";

import { init } from "@emailjs/browser";
init("user_lpqHRPa7AJz66qRj64Xw1");

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

    const formRef = useRef();

    const [openModal, setOpenModal] = useState<boolean>(false);

    const inputClasses =
        "w-full bg-primary text-dark text-xl rounded-lg border-none px-5 py-3 focus:ring-secondary focus:border-secondary";

    const submitForm = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        emailjs
            .sendForm(
                "gmail",
                "portfolio",
                formRef.current,
                process.env.EMAIL_JS_USER_ID,
            )
            .then((res) => setOpenModal(true))
            .catch((error) => console.error(error));

        setFormState({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <>
            <div className="relative py-8 lg:py-16">
                <div className="absolute inset-0 opacity-50 waves -z-1"></div>
                <Row>
                    <Heading
                        title="Get In Touch"
                        headingSize="h2"
                        className="text-right"
                    />
                    <form
                        ref={formRef}
                        id="contact"
                        className="flex flex-col gap-y-6"
                        onSubmit={(e) => submitForm(e)}
                    >
                        <div className="flex flex-col gap-y-6">
                            <div className="flex flex-wrap">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    id="name"
                                    name="name"
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
                                    name="email"
                                    onChange={(e: ChangeEvent) =>
                                        setFormState({
                                            ...formState,
                                            email: (
                                                e.target as HTMLInputElement
                                            ).value,
                                        })
                                    }
                                    value={formState.email}
                                    required
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    onChange={(e: ChangeEvent) =>
                                        setFormState({
                                            ...formState,
                                            message: (
                                                e.target as HTMLInputElement
                                            ).value,
                                        })
                                    }
                                    value={formState.message}
                                    placeholder="What's on your mind?"
                                    required
                                    className={inputClasses}
                                />
                            </div>
                        </div>
                        <Button onClick={(e) => submitForm(e)}>send!</Button>
                    </form>
                </Row>
            </div>
            <Modal
                isOpen={openModal}
                closeModal={(isOpen) => setOpenModal(isOpen)}
                btnText="Got it!"
            >
                <Heading
                    title="Thanks for reaching out! I'll be in touch shortly"
                    headingSize="h3"
                />
            </Modal>
        </>
    );
};

export default Contact;
export { Contact };
