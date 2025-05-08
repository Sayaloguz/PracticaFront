// Esto no funciona

import { toast } from "react-toastify";

interface ToastifySuccessProps {
  title: string;
}

export const ToastifySuccess = ({ title }: ToastifySuccessProps) => {
  toast.success(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });
};
