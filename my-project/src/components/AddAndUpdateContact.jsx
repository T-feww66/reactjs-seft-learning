import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Field, Form, Formik } from "formik";

import Modal from "./Modal";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

function AddAndUpdateContact({ isOpen, onClose, isUpdate, contact }) {
    const addContact = async (contact) => {
        try {
            const contactsRef = collection(db, "contact");
            await addDoc(contactsRef, contact);
            onClose();
            toast.success("Add contacts is success!");
        } catch (error) {
            console.log(error);
        }
    };
    //update contact
    const updateContact = async (contact, id) => {
        try {
            const contactsRef = doc(db, "contact", id);
            await updateDoc(contactsRef, contact);
            onClose();
            toast.success("Update contacts is success!");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik
                    initialValues={
                        isUpdate
                            ? {
                                  name: contact.name,
                                  email: contact.email,
                              }
                            : {
                                  name: "",
                                  email: "",
                              }
                    }
                    onSubmit={(values) => {
                        isUpdate
                            ? updateContact(values, contact.id)
                            : addContact(values);
                    }}
                >
                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field
                                name="name"
                                className="border rounded-lg h-10 focus:border-[#46f3df] outline-none p-2"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                name="email"
                                className="border rounded-lg h-10 focus:border-[#46f3df] outline-none p-2"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="flex justify-center items-center text-center text-black text-lg font-medium border rounded-lg  p-4 bg-yellow-dark h-[30px]"
                            >
                                {isUpdate ? "Update" : "Add"} Contact
                            </button>
                        </div>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
}

export default AddAndUpdateContact;
