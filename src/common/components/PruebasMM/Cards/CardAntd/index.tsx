"use client";
import { Avatar, Card, Image } from "antd";
import { FC, useState, useEffect } from "react";
import {
  InfoCircleOutlined,
  StarOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import ConfirmModalAntd from "@/common/components/Modals/ConfirmModalAntd/Delivery";
import ModalUsersInJam from "../../ModalsMM/ModalUsersInJam/Delivery";
import ModalInfoJam from "../../ModalsMM/ModalInfoJam/Delivery";

interface User {
  id: string;
  username: string;
  avatar: string;
}

interface CardAntdProps {
  game: string;
  alt: string;
  src: string;
  user: string;
  desc: string;
  participants: User[]; // Agregamos los participantes como prop
  onRemoveUser: (userId: string) => void; // Agregamos la función para eliminar usuarios
}

const CardAntd: FC<CardAntdProps> = ({
  game,
  alt,
  src,
  user,
  desc,
  participants,
  onRemoveUser,
}) => {
  const [infoModal, setInfoModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const [favModal, setFavModal] = useState(false);
  const [isClient, setIsClient] = useState(false); // Estado para asegurar el renderizado solo en cliente

  useEffect(() => {
    setIsClient(true); // Habilita el renderizado solo en el cliente
  }, []);

  if (!isClient) return null; // No renderizar hasta que el componente esté montado en el cliente

  return (
    <>
      <Card
        className="border border-transparent hover:border-slate-400 transition-all duration-500 hover:scale-105"
        style={{ maxWidth: 360, width: "100%" }}
        cover={<Image alt={alt} src={src} preview={false} />}
        actions={[
          <InfoCircleOutlined
            key="info"
            style={{ fontSize: "20px" }}
            onClick={() => setInfoModal(true)}
          />,
          <UsergroupAddOutlined
            key="join"
            style={{ fontSize: "20px" }}
            onClick={() => setJoinModal(true)} // Abre el modal de usuarios en vez del ConfirmModalAntd
          />,
          <StarOutlined
            key="fav"
            style={{ fontSize: "20px" }}
            onClick={() => setFavModal(true)}
          />,
        ]}
      >
        <Meta avatar={<Avatar src={user} />} title={game} description={desc} />
      </Card>

      <ModalInfoJam
        visible={infoModal}
        onClose={() => setInfoModal(false)} // Cierra el modal
        participants={participants} // Pasa los participantes
        onRemoveUser={onRemoveUser} // Pasa la función para eliminar un usuario
      />
      <ModalUsersInJam
        visible={joinModal}
        onClose={() => setJoinModal(false)} // Cierra el modal
        participants={participants} // Pasa los participantes
        onRemoveUser={onRemoveUser} // Pasa la función para eliminar un usuario
      />
      <ConfirmModalAntd
        title="La acción de favoritos aún no está disponible"
        message="La acción de marcar como favoritos todavía no está disponible, disculpe por las molestias."
        open={favModal}
        onCancel={() => setFavModal(false)}
        onConfirm={() => {
          console.log("guay");
          setFavModal(false);
        }}
      />
    </>
  );
};

export default CardAntd;
