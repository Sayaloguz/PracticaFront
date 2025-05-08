// Esto no funciona

import { FC } from "react";
import { toast } from "react-toastify";

interface ToastifyErrorProps {
  title: string;
}

const ToastifyError: FC<ToastifyErrorProps> = ({title} : {title: string}) => {
    return (
        toast.error(title, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    )
}

export default ToastifyError;