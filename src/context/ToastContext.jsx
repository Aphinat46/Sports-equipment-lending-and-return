import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const toastSetting = {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
    };

    const toastAlert = (text, status) => {
        switch (status) {
            case "success":
                toast.success(text, toastSetting);
                break;
            case "error":
                toast.error(text, toastSetting);
                break;
            default:
                toast(text, toastSetting);
        }
    };

    return (
        <ToastContext.Provider value={{ toastAlert }}>
            <ToastContainer />
            {children}
        </ToastContext.Provider>
    );
};

export default ToastContext;
