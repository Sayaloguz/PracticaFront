import ClientForm from "@/common/components/Forms/ClientForm/Delivery";
import MerchantForm from "@/common/components/Forms/MerchantForm/Delivery";
import { FC } from "react";

interface UpdateModalProps {
    title: string;
    id: string;
    onSubmit: (data: any) => void;
    onConfirm: () => void;
    onCancel: () => void;
}

const UpdateModal: FC<UpdateModalProps> = ({ title, id, onConfirm, onCancel, onSubmit }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
            <div className="relative p-4 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
            
                        {title === "Actualizar cliente" && (
                        <ClientForm
                            id={id}
                            action="updateClient"
                            onSubmit={onConfirm}
                            onCancel={onCancel}
                            isUpdate={true}
                        />
                        )}
                        {title === "Actualizar merchant" && (
                         <MerchantForm
                            id={id}
                            action="updateMerchant"
                            onSubmit={onConfirm}
                            onCancel={onCancel}
                            isUpdate={true}
                            />
                        )}
                    
                </div>
            </div>
        </div>
    );
};
export default UpdateModal;