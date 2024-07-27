import { deleteDoc, doc } from "firebase/firestore";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
function ContactCard({ contact }) {
    const { isOpen, handleClose, handleOpen } = useDisclouse();

    //ham xoa user
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contact", id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex items-center bg-yellow rounded-xl p-3">
                <FaRegUserCircle className="text-orange text-4xl mr-3" />
                <div>
                    <h2 className="text-xl font-medium">{contact.name}</h2>
                    <p className="text-sm">{contact.email}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <HiOutlinePencilAlt
                        onClick={handleOpen}
                        className="text-2xl font-normal cursor-pointer"
                    />
                    <ImBin
                        onClick={() => deleteContact(contact.id)}
                        className="text-2xl text-purple"
                    />
                </div>
            </div>
            <AddAndUpdateContact
                contact={contact}
                isUpdate
                isOpen={isOpen}
                onClose={handleClose}
            />
        </>
    );
}

export default ContactCard;
