// Esto no funciona

import { FC } from "react";
import Icon from "../../../Icon/Delivery";

interface IconToastProps {
  icon: string;
  message: string;
  onClose: () => void;
}

const IconToast: FC<IconToastProps> = ({ icon, message, onClose }) => {
  return (
    <div
      id="toast-default"
      className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <Icon id={icon} />
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        onClick={onClose}
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close"
      >
        <Icon id="close" />
      </button>
    </div>
  );
};

export default IconToast;
