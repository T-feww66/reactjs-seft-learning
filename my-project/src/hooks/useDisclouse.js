import { useState } from "react";

function useDisclouse() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return {
        isOpen,
        handleClose,
        handleOpen,
    };
}

export default useDisclouse;
