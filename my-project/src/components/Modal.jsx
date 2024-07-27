import { IoMdClose } from "react-icons/io";

function Modal({ isOpen, onClose, children }) {
    return (
        <>
            {isOpen ? (
                <>
                    <div className="relative z-50 min-h-[240px] w-full bg-white p-3 rounded-lg">
                        <div className="flex justify-end">
                            <IoMdClose
                                onClick={onClose}
                                className="text-3xl cursor-pointer"
                            />
                        </div>
                        {children}
                    </div>
                    <div
                        onClick={onClose}
                        className="absolute z-40 inset-0 w-screen h-screen backdrop-blur"
                    ></div>
                </>
            ) : (
                ""
            )}
        </>
    );
}

export default Modal;
