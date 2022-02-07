import React, { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from ".";

interface IModalProps {
    /**
     * Close button text
     */
    btnText?: string;
    /**
     * Is the modal open?
     */
    isOpen: boolean;
    /**
     * Function to close modal
     */
    closeModal: (isOpen: boolean) => void;
}

const Modal: FC<IModalProps> = ({ btnText, isOpen, closeModal, children }) => {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                open={isOpen}
                onClose={() => closeModal(false)}
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
            >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <Transition.Child
                    as={Fragment}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <div className="relative w-1/2 px-8 pt-8 pb-4 mx-auto bg-white rounded-lg">
                        {children}
                        <div className="flex items-end justify-end w-full py-4">
                            <Button onClick={() => closeModal(false)}>
                                got it!
                            </Button>
                        </div>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
};
export default Modal;
export { Modal };
