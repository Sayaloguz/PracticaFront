import { FC } from "react";

import DeleteIcon from "../DeleteIcon";
import EditIcon from "../EditIcon";
import InfoIcon from "../InfoIcon";
import CloseIcon from "../CloseIcon";
import UsersIcon from "../UsersIcon";
import StoreIcon from "../StoreIcon";
import AddIcon from "../AddIcon";
import UserPlusIcon from "../UserPlusIcon";


interface IconProps{
    id: keyof typeof icons; // Solo puede ser una de las claves de icons
}

const icons = {
    edit: EditIcon,
    delete: DeleteIcon,
    info: InfoIcon,
    close: CloseIcon,
    users: UsersIcon,
    store: StoreIcon,
    add: AddIcon,
    addUser: UserPlusIcon
}

const Icon: FC<IconProps> = ({id}) => {
    const Component = icons[id];
    return <Component />
};

export default Icon;