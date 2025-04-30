import { FC } from "react";

import DeleteIcon from "../DeleteIcon";
import EditIcon from "../EditIcon";
import InfoIcon from "../InfoIcon";



interface IconProps{
    id: keyof typeof icons; // Solo puede ser una de las claves de icons
}

const icons = {
    edit: EditIcon,
    delete: DeleteIcon,
    info: InfoIcon
}

const Icon: FC<IconProps> = ({id}) => {
    const Component = icons[id];
    return <Component />
};

export default Icon;