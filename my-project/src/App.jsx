import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";

// Toast message
import "react-toastify/dist/ReactToastify.css";

// import inside
import Navbar from "./components/Navbar";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer } from "react-toastify";

function App() {
    const [contacts, setContacts] = useState([]);
    const { isOpen, handleClose, handleOpen } = useDisclouse();

    useEffect(() => {
        const getContacts = async () => {
            try {
                //tạo tham chiếu đến document tên contact
                const contactsRef = collection(db, "contact");

                //lấy toàn bộ document từ collection contact

                onSnapshot(contactsRef, (snapshot) => {
                    const contactLists = snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    });
                    setContacts(contactLists);
                    return contactLists;
                });
            } catch (error) {
                console.log(error);
            }
        };
        getContacts();
    }, []);

    const filteredContact = (e) => {
        const value = e.target.value;

        //tạo tham chiếu đến document tên contact
        const contactsRef = collection(db, "contact");

        //lấy toàn bộ document từ collection contact

        onSnapshot(contactsRef, (snapshot) => {
            const contactLists = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });

            const filter = contactLists.filter((contact) => {
                return contact.name.toLowerCase().includes(value.toLowerCase());
            });

            setContacts(filter);
            return filter;
        });
    };

    return (
        <div className="w-[400px] max-w-full  mx-auto p-5 h-[100vh] bg-[#323334]">
            <Navbar />

            <div className="flex items-center mt-5 gap-2">
                <div className="relative flex-1">
                    <CiSearch className="absolute top-[50%] translate-y-[-50%] left-2 text-3xl text-white" />
                    <input
                        onChange={filteredContact}
                        type="text"
                        className="w-full h-[40px] bg-transparent border border-white rounded-md outline-none pl-10 pr-2 text-white text-xl"
                    />
                </div>
                <IoIosAddCircleOutline
                    onClick={handleOpen}
                    className="text-6xl text-white cursor-pointer"
                />
            </div>

            <div className="w-full mt-5 flex flex-col gap-2">
                {contacts.map((contact, index) => {
                    return <ContactCard key={contact.id} contact={contact} />;
                })}
            </div>
            <AddAndUpdateContact isOpen={isOpen} onClose={handleClose} />
            <ToastContainer />
        </div>
    );
}

export default App;
//https://www.figma.com/file/rephrU2FVgN8MFz6XhnP51/Learn-React-with-10-Projects?type=design&node-id=864-52&t=wuNRaDLVHqH5cAaK-0
